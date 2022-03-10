import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../.././environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  public post<T>(url: string, data:any): Observable<T> {
    return this.http.post<any>(`${baseUrl}${url}`, data);
  }
  Header() {
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return { headers: header };
  }
}
