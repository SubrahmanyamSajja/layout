import { AuthenticationService } from './../../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  userData: any = {
    username: "",
    password: ""
  };

  constructor(private router:Router,private authService:AuthenticationService) { }

  ngOnInit() {

  }
  login(){
    this.authService.login(this.userData).subscribe(res=>{
    
    console.log(res);
  },ex=>{



  });
}
  }
