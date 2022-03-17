import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';
import { EnvService } from './env.service';
import { User } from '../models/user';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn:any;
  token:any;
  userName:'';
  private _storage: Storage | null = null;

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private env: EnvService,
  ) {
     this.init();
   }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
    this.getToken()
  }


  validateEmail(email: String) {
  
      let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

     return this.http.post(this.env.API_URL + 'login/',{email: email},httpOptions).pipe(
      tap(data => {
        return data;
      })
    )
    
  }
  
  validateOtp(email: String, otp: String) {
  let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };

    return this.http.post(this.env.API_URL + 'verify-otp/',{email: email,otp: otp},httpOptions).pipe(
      tap(data => {
      if(data['success']){
        this._storage.set('USER_TOKEN', data['access'])
      }
        return data;
      })
    )
  }
  
  
  getUserProfile(){
    console.log('getUserProfile')
    let httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.get(this.env.API_URL + 'user-profile/ramanbhasker@ocodewire.com/', httpOptions).pipe(
     tap(user => { 
     this._storage.set('USER_PROFILE',user)
     return user;
     })
    )
  }
  
  
  logout() {

        this._storage?.remove("USER_TOKEN");
        this.isLoggedIn = false;
        this.userName='';
        delete this.token;
        return '';
        
  }

  user() {

  return this._storage.get('USER_PROFILE')
    
  }

  getToken() {
    return this._storage?.get('USER_TOKEN').then(
      data => {
         this.token = data;
         if(this.token != null) {
         var jwt_decodeed = jwt_decode(data)
         this.userName = jwt_decodeed['user_id']
         this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
          this.userName = ''
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
        this.userName = ''
      }
    );
  }
}
