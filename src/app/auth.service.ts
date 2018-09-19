import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: 'http://localhost:8080/email2sms/';

  constructor(private http: HttpClient) { }

  attemptAuth(username: string, password: string){
    const credentials = {username: username, password: password};
    console.log('attemptAuth ::');
    return this.http.post('http://localhost:8080/token/generate-token', credentials);
  }
}
