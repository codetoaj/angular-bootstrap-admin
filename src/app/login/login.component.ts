import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showAlert:boolean = false;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // getting form data from loginform
    const  { email, password } = this.loginForm.value;
    debugger;
    // encoding password into sha256 format
    const shaPassword = sha256(password);
    debugger;
    // preparing json object for login api call
    const loginData = {
      email: email,
      password: shaPassword
    };
    debugger;
    // calling login service
    this.authService.userLogin(loginData)
      .subscribe((res:any)=> {
        debugger;
        const authToken = res?.data?.authToken;
        debugger;
        if (authToken) {
          localStorage.setItem('x-authtoken', authToken);
          debugger;
          this.router.navigate(['/dashboard']);
        }
      },()=> {
        this.showAlert = true;
        setTimeout(()=> {
          this.showAlert = false;
        }, 2000);
      });
  }

}
