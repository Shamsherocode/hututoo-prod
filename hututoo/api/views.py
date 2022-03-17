from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework import authentication, permissions
from rest_framework.permissions import IsAuthenticated, SAFE_METHODS, BasePermission
from .models import *
from .serializers import *
from .email import sendOTP
from functools import partial
from django.contrib.auth.hashers import make_password
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.tokens import RefreshToken

import json
import threading
import hashlib


def random_with_N_digits(n):
    range_start = 10**(n-1)
    range_end = (10**n)-1
    return randint(range_start, range_end)

# def save(self, *args, **kwargs):
#         self.public_key = random_with_N_digits(12)
#         super(UserProfile, self).save(*args, **kwargs)

class EmailThread(threading.Thread):
    def __init__(self, sendOTP):
        self.sendOTP = sendOTP
        threading.Thread.__init__(self)

    def run(self):
        self.sendOTP()

       
class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS

class MyPermission(permissions.BasePermission):
    def __init__(self, allowed_methods):
        super().__init__()
        self.allowed_methods = allowed_methods

    def has_permission(self, request, view):
        return request.method in self.allowed_methods

class UserRegister(APIView):
    # permission_classes = [ReadOnly]
    def post(self, request):
        try:
            data = request.data
            serializer = RegitserSerializer(data = data)
            if serializer.is_valid():
                serializer.save()
                sendOTP(data['email'])
                return Response({
                    'status': 200,
                    'message': 'Verification code sent on the mail address. Please check',
                })
            return Response({
                'status': 400,
                'message': 'Something went wrong',
                'data': serializer.errors
            })

        except Exception as e:
            print(e)

class LoginUser(APIView):
    # permission_classes = (partial(MyPermission, ['GET', 'POST', 'HEAD']),)
    def post(self, request):
        try:
            data = request.data
            serializer = LoginSerializer(data)
            verify_user = User.objects.filter(email = data['email'])
            if not verify_user:
                user = User(email = data['email'])
                user.save()
            else:
                user = verify_user[0]
            sendOTP(user)
            return Response({
            'success': True,
            'message': 'Verification code sent on the mail address. Please check',
            'data': serializer.data,
            })
        except: 
            return Response({
            'success': False,
            'message': 'Please Type correct Email Address',
            })

class EventOptionView(APIView):
    # permission_classes = [ReadOnly]
    def get(self, request):
        data = QuizOption.objects.all()
        serializer = QuizOptionSerializer(data, many=True)
        return Response({'success': True, 'payload': serializer.data})

class EventCategoryView(APIView):
    # permission_classes = [ReadOnly]
    def get(self, request):
        data = QuizCategory.objects.all()
        serializer = QuizCategorySerializer(data, many=True)
        return Response({'success': False, 'payload': serializer.data})

class VerifyOTP(APIView):
    # permission_classes = (partial(MyPermission, ['GET', 'POST', 'HEAD']),)
    def post(self, request):
        try:
            data = request.data
            serializer = VerifyUserOTPSerializer(data = data)
            if serializer.is_valid():
                email = serializer.data['email']
                otp = serializer.data['otp']
                try:
                    user = User.objects.get(email=email)
                    if user.otp != otp:
                        return Response({
                            'success': False,
                            'message': 'Invalid OTP. Please enter corrent OTP',  
                        })
                    else:
                        if not user.is_verified:
                            user.is_verified = True
                            user.save()
                            privat_key_gen = make_password(user.email + str(user.id))
                            # profile = UserProfile(user = user, city='Jaipur')
                            points, created = Transaction.objects.get_or_create(user = user, user_points=10000, points_method='SignUp Bonus', points_status='Credit')
                            points.save()
                            profile , created = UserProfile.objects.get_or_create(user = user, private_key=privat_key_gen, public_key=random_with_N_digits(12))
                            profile.save()
                        user_profile = UserProfile.objects.get(user__email=user)
                        profile_serializer = UserProfileViewSerializer(user_profile)
                        user = User.objects.get(email = serializer.data['email'])
                        refresh = RefreshToken.for_user(user)
                        return Response({
                                'success': True,
                                'access': str(refresh.access_token),
                                'data': profile_serializer.data
                            })
                except:
                    return Response({
                        'success': False,
                        'message': 'Email not found. Please enter the correct Email Address',
                        
                    })

            return Response({
                        'success': False,
                        'payload': 'Something Went Wrong',
                        
                    })
        except:
            return Response({
                        'success': False,
                        'message': 'Something Went Wrong',
                    })

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, user):
        try: 
            user_profile = UserProfile.objects.get(user__email=user)
            profile_serializer = UserProfileSerializer(user_profile)
            return Response({'success': True, 'payload': profile_serializer.data})
        except:
            return Response({'success': False, 'message': 'Unauthenticted User'})

    # def post(self, request):
    #     serializer = UserProfile(data = request.data)
    #     if not serializer.is_valid():
    #         print(serializer.errors)
    #         return Response({'success': False, 'payload': serializer.errors, 'message': 'Something went wrong'})

    #     serializer.save()
    #     return Response({'success': True, 'payload': serializer.data, 'message': 'You have successfully Created Quiz.'})

    def put(self, request, user):
        try:
            user_profile = UserProfile.objects.get(user__email=user)
            serializer = UserProfileSerializer(user_profile, data = request.data)
            if not serializer.is_valid():
                print(serializer.errors)
                return Response({'success': False, 'payload': serializer.errors, 'message': 'Something went wrong'})

            serializer.save()
            return Response({'success': True, 'payload': serializer.data, 'message': 'You have successfully updated..'})

        except Exception as e:
            print(e)
            return Response({'success': False, 'message': 'Invalid ID'})

    def patch(self, request, user):
        try:
            user_profile = UserProfile.objects.get(user__email=user)
            serializer = UserProfileSerializer(user_profile, data = request.data, partial=True)
            if not serializer.is_valid():
                print(serializer.errors)
                return Response({'success': False, 'payload': serializer.errors, 'message': 'Something went wrong'})

            serializer.save()
            return Response({'success': True, 'payload': serializer.data, 'message': 'You have successfully updated profile.'})

        except Exception as e:
            print(e)
            return Response({'success': False, 'message': 'Invalid ID'})

class EventView(APIView):
    # permission_classes = [ReadOnly]
    def get(self, request):
        quizs = Quizs.objects.all()
        serializer = QuizSerializer(quizs, many=True)
        return Response({'success': True, 'payload': serializer.data})

    def post(self, request):
        serializer = QuizSerializer(data = request.data)
        if not serializer.is_valid():
            print(serializer.errors)
            return Response({'success': False, 'payload': serializer.errors, 'message': 'Something went wrong'})

        serializer.save()
        return Response({'success': True, 'payload': serializer.data, 'message': 'You have successfully Created Quiz.'})


    def put(self, request):
        try:
            quizs = Quizs.objects.get(id = request.data['id'])
            serializer = QuizSerializer(quizs, data = request.data)
            if not serializer.is_valid():
                print(serializer.errors)
                return Response({'success': False, 'payload': serializer.errors, 'message': 'Something went wrong'})

            serializer.save()
            return Response({'success': True, 'payload': serializer.data, 'message': 'You have successfully Created Quiz.'})

        except Exception as e:
            print(e)
            return Response({'success': False, 'message': 'Invalid ID'})

    def patch(self, request):
        try:
            quizs = Quizs.objects.get(id = request.data['id'])
            serializer = QuizSerializer(quizs, data = request.data, partial=True)
            if not serializer.is_valid():
                print(serializer.errors)
                return Response({'success': False, 'payload': serializer.errors, 'message': 'Something went wrong'})

            serializer.save()
            return Response({'success': True, 'payload': serializer.data, 'message': 'You have successfully Created Quiz.'})

        except Exception as e:
            print(e)
            return Response({'success': False, 'message': 'Invalid ID'})


    def delete(self, request):
        try:
            id = request.GET.get('id')
            quizs = Quizs.objects.get(id=id)
            quizs.delete()
            return Response({'success': True, 'message': 'Quiz Successfully deleted'})
        
        except Exception as e:
            print(e)
            return Response({'success': False, 'message': 'Invalid ID'})

class TransactionView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, user):
        try: 
            transaction = Transaction.objects.filter(user__email=user)
            serializer = TransactionSerializer(transaction, many=True)
            total = 0
            for i in serializer.data:
                if i['points_status'] == 'Credit':
                    total = total+i['user_points']
                else:
                    total = total - i['user_points']

            return Response({'success': True, 'payload': serializer.data, 'total_points': total})
        except:
            return Response({'success': False, 'message': 'Unauthenticted User'})


def view_404(request, exception=None):
    return Response({'status': 500, 'message': 'Invalid Request'})


class PredictView(APIView):
    def post(self, request, **kwargs):
        user = get_object_or_404(RegisterUser, email=kwargs['user'])# RegisterUser.object.get(email = user)
        event = get_object_or_404(Quizs, id=kwargs['event_id'])
        # try:
        # Create  Validator for points 
        trans = Transaction(
            user = user,
            event = event,
            user_points = event.point,
            points_method ="Events Points",
            points_status = "Debit"
        )
        trans.save()
        return Response({'status': 200, 'message': 'success'})
        # except:
        #     return Response({'status': 200, 'message': 'Error'})
        

 