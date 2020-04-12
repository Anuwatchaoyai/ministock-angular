import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  userData = {
    "email": "",
    "password":""
  }
  
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  submitLogin() {
   if(this.userData.email == "admin@gmail.com" && this.userData.password == "1234"){
      this.router.navigate(['backend']);
   }else {
     alert("login Fail");
   }
  }
}
