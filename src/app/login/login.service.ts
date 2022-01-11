import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  getLoginData(username:string)
  {
    // return this.http.get<UserDetails[]>('http://localhost:3000/users');

    return this.http.get<any>('/users/registration' + "/" +  username);

  }
}
