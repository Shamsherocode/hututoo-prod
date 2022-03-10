import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';
import { EnvService } from './env.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn:any;
  token:any;
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


  login(email: String, password: String) {

       let tokenData=[];
        tokenData["token_type"]='Barier';
        tokenData["access_token"]='access_tokenaccess_tokenaccess_tokenaccess_tokenaccess_token';
        this._storage?.set('token', tokenData);

        this.token = tokenData;
        this.isLoggedIn = true;
        return tokenData;
     /*
    return this.http.post(this.env.API_URL + 'auth/login',
      {email: email, password: password}
    ).pipe(
      tap(token => {
      console.log(token)
        this._storage?.set('token', token);

        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
    */

  }

  register(fName: String, lName: String, email: String, password: String) {
    return this.http.post(this.env.API_URL + 'auth/register',
      {fName: fName, lName: lName, email: email, password: password}
    )
  }

  logout() {

        this._storage?.remove("token");
        this.isLoggedIn = false;
        delete this.token;
        return '';
        /*
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });

    return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
    .pipe(
      tap(data => {
        this._storage.remove("token");
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    )
    */
  }

  user() {

  let user={
    id: 11,
    name: 'bhasker80',
    mobile: '9988664020',
    email: 'ramanb@browsewire.net',
    public_id: 'abc123abc123',
    dob:'16-01-1980',
    city: 'Mohlai',
    state: 'Punjab',
    private_key: 'abc123abc123cyb17',
    avatar: 'assets/images/avatar-3.jpg',
   };

  return user;
  /*
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });

    return this.http.get<User>(this.env.API_URL + 'auth/user', { headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
    */
  }

  getToken() {
    return this._storage?.get('token').then(
      data => {
       this.token = data;

        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }
}
