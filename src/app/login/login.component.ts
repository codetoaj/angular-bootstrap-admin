import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginForm.value)
    const  { email, password } = this.loginForm.value;
    if (email === 'admin@gmail.com' && password === 'admin12') {
      this.router.navigate(['/dashboard']);
    } else {
      this.showAlert = true;
      setTimeout(()=> {
        this.showAlert = false;
      }, 2000);
    }
  }

}
