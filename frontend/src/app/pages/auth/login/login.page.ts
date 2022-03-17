import { Component, OnInit } from '@angular/core';
import { ModalController,MenuController, NavController,LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginStep =1;
  public success=false;
  public error=false;
  public message='';
  public buttonName='Submit';
  public useremail='';
  public userotp='';
   loading = null;


  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private menu: MenuController,
    public loadingController: LoadingController
  ) {
  
  

  }

   async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await this.loading.present();
  }

  async dismiss() {
      await this.loading.dismiss();

  }

  ngOnInit() {
  
  
  this.success=false;
  this.loginStep =1
  }

  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }

  // On Register button tap, dismiss login modal and open register modal
  async registerModal() {
  this.navCtrl.navigateRoot('/register');
  /*
    this.dismissLogin();
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
    */
  }


  otpController(event,next,prev){
   if(event.target.value.length < 1 && prev){
     prev.setFocus()
   }
   else if(next && event.target.value.length>0){
     next.setFocus();
   }
   else {
    return 0;
   }

   }

  ReSendOTP(form){
    form.reset();
    this.success=true;
    this.message='Please enter one time verification code sent to '+this.useremail
    this.loginStep =2
    this.buttonName='Login'
  }


  login(form: NgForm) {
  this.presentLoading();
  this.error = false;
  this.success = false;

  if(this.loginStep ===1){
  if(this.favlidateEmail(form.value.email)){
  setTimeout(() => {
  this.error=true;
  this.message='Please enter valid email...'
  this.dismiss();
  }, 500);

  }else{
  this.authService.validateEmail(form.value.email).subscribe(
      data => {
      console.log(data)
      if(data['success']){
      this.useremail = form.value.email;
      this.success=true;
      this.message=data['message']
      this.loginStep =2
      this.buttonName='Login'
      this.dismiss();
      }else{
       this.error=true;
       this.message=data['message']  
       this.dismiss();
      }
      },
      error => {
      this.error=true;
      this.message=error.message
      this.dismiss();
      }
      
    );
  }
  }else if(this.loginStep === 2){
  this.userotp = form.value.otp1+form.value.otp2+form.value.otp3+form.value.otp4+form.value.otp5+form.value.otp6;
  if(this.userotp.length <6){
  this.error=true;
  this.message='Please enter valid OTP'
  this.dismiss();
  }else{
  
  
  this.authService.validateOtp(this.useremail,this.userotp).subscribe(
      data => {
      if(data['success']){
      /*
      setTimeout(() => {
      window.location.reload();
      }, 100);
      */
      this.navCtrl.navigateRoot('/landing');
      console.log(data)
      this.dismiss();
      }else{
       this.error=true;
       this.message=data['message'] 
       this.dismiss();
      }
      },
      error => {
      this.error=true;
      this.message=error.message
      this.dismiss();
      }
    );
    
  
  
  /*
  setTimeout(() => {
  this.dismiss();
  this.authService.login(this.useremail)
  //this.alertService.presentToast("Logged In");
  this.navCtrl.navigateRoot('/landing');
  }, 5000);
  
  */
  }

  }
  //this.authService.login(form.value.email, form.value.password)
  //this.alertService.presentToast("Logged In");
  //this.navCtrl.navigateRoot('/dashboard');
  /*

    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
        this.alertService.presentToast("Logged In");
      },
      error => {
        console.log(error);
      },
      () => {
        //this.dismissLogin();
        this.navCtrl.navigateRoot('/dashboard');
      }
    );
    */
  }

  favlidateEmail(email){
  if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) ) {
            return true;
  }else{
            return false;
  }

  }


}
