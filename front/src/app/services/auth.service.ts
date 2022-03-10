import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: BehaviorSubject<any> = new BehaviorSubject(null);
  token: string = null;
  jwt: string = null;
  refreshToken: string = null;

  constructor(private router: Router, private cookies: CookieService) { 
    // const tokenData = localStorage.getItem('token');
    // const jwtData = this.cookies.get('jwt')
    // console.log(jwtData)
    // this.refreshToken = localStorage.getItem('refreshToken');
    // if (jwtData) {
    //   this.jwt = jwtData;
    //   console.log(this.jwt)
    // }
    // const userData = localStorage.getItem('user');
    // if (userData) {
    //   const parsedData = JSON.parse(userData);
    //   if (parsedData) {
    //     this.setUser(parsedData);
    //   }
    // }
  }


  // Check user is Authenticate or not

  public isAuthenticated(): boolean {
    const tokenData = localStorage.getItem('token');
    if (tokenData == null){
      return false;
    } else {
      return true;
    }
  }

  // Set Token

  public setToken(token:string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  // public setToken(token:string): void {
  //   this.token = token;
  //   this.cookies.set('token', token);
  // }
  //Get Access Token

  // public setJwt(jwt:string): void {
  //   this.jwt = jwt;
  //   this.cookies.set('jwt', jwt);
  //   console.log(this.cookies, 'set in cookes')
  //   console.log(this.jwt, 'store in jwt')
  // }

  public getAccessToken(): string|null {
    if (this.jwt) {
      return this.jwt;
    } else {
      return null;
    }
  }
  
  
  public setRefreshToken(Reftoken:string): void {
    this.refreshToken = Reftoken;
    localStorage.setItem('refreshToken', Reftoken);
  }
  
  public getRefreshToken(): string|null {
    if (this.refreshToken) {
      return this.refreshToken;
    } else {
      return null;
    }
  }

  

  //  Set User

  setUser(user): void {
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user))
  }
  
    /**
     * Get user 
     */
    getUser() {
      const user = this.user.getValue();
      if (user) {
        return user;
      } else {
        return {};
      }
    }

     /**
   * Logout
   */
  public logout(url = '/', params = {}) {
    
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    this.token = null;
    this.user.next(null);
    if(url){
      this.router.navigateByUrl('/login')
    }
  }

  /**
   * Get auth user username
   */
  public getUserfname(): string {
    const user = this.user.getValue();
    if (user) {
      return user.fullname;
    } else {
      return null;
    }
  }

  // Get User EmailAddress

  public getUseremail(): string {
    const user = this.user.getValue();
    if (user) {
      return user.email;
    } else {
      return null;
    }
  }

  //Get User username

  public getUsername(): string {
    const user = this.user.getValue();
    if (user) {
      return user.username;
    } else {
      return null;
    }
  }


  // Generate and Get DeviceID

  getDeviceID(){
    if(localStorage.getItem('deviceID')){
    const deviceID= localStorage.getItem('deviceID');
    return deviceID;
    }else{
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const deviceID = [...crypto.getRandomValues(new Uint8Array(32)), ...crypto.getRandomValues(new Uint8Array(32))].map(v => chars[v % chars.length]).join('');
    localStorage.setItem('deviceID', deviceID)
    return deviceID;
    }
    
  }

} 
