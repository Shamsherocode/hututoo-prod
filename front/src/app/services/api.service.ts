import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { baseUrl, headers } from 'environments/environment';

import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  incodeURL: any;
  apiheader: any;
  

 constructor(private http: HttpClient, private authService: AuthService) { }


 public httpRequest(method: string,url: string, data) {
 
  if(data){
  this.incodeURL = this.incodedData(data)
  }
  
  // if(withAuth){
  //   if(this.checkAccessToken()){
  // 	 this.apiheader = this.HeaderWithToken();
  // 	}else{
  // 	 window.location.href = 'login'
  // 	}
  // }else{
  // 	this.apiheader = this.Header();
  // }
  
  if(method =='post'){
  	return this.http.post(`${baseUrl}${url}`, this.incodeURL, this.apiheader)
  }else if(method =='put'){
  
  }else{
    
    return this.http.get(`${baseUrl}${url}`, this.apiheader);
  }
    
    
  }
  
  // public checkAccessToken(){
  // var AccessToken = this.authService.getAccessToken();
  // if(AccessToken){
  // var tokenData = jwt_decode(AccessToken);
  // var _accessTokenCurrentTime = new Date();
  // var _accessTokenExpTime = new Date(tokenData['exp'] * 1000);
  
  // var seconds = Math.floor((_accessTokenExpTime.getTime() - _accessTokenCurrentTime.getTime())/ 1000) ;
  // console.log(seconds)
  // if(seconds < 5){
  // 	return this.refreshAccessToken();
  // }else{
  // 	return true
  // }
  
  // }
 
  // }
  
  
  // public refreshAccessToken(){
  //   const url = 'jwtRefreshSessions';
  //   var data = {'refreshToken': this.authService.getRefreshToken(), 'deviceID': this.authService.getDeviceID()};
  //   const incodeURL = this.incodedData(data)
  //   return this.http.post<any>(`${baseUrl}${url}`, incodeURL, { headers: headers }).subscribe((result: any) => {
  //     if(result.isOK){
  //    	 this.authService.setToken(result.authData.accessToken)
  //    	 this.authService.setRefreshToken(result.authData.refreshToken)
  //    	 return true;
  //     }else{
  //     return false;
  //     }
      
  //   })
  // }
  
  
  
  // public HeaderWithToken() {
  //   let header = new HttpHeaders();
  //   header = header.append('Authorization', 'Bearer ' + this.authService.getAccessToken());
  //   return { headers: header };
  // }
  
  public Header() {
    return { headers: headers };
  }
  
  public incodedData(data){
    const toUrlEncoded = obj => Object.keys(obj).map(
      k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');
      return(toUrlEncoded(data))
  }
  
}
