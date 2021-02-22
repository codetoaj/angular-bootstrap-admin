import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  userLogin(data:any) {
    return this.http.post('http://localhost:8080/user/login', data);
  }
}
