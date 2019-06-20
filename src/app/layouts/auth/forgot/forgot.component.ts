import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styles: []
})
export class ForgotComponent implements OnInit {
forgotPassword:{
  newPassword:"",
  confirmPassword:""
}
  constructor() { }

  reset(){
    
  }
  ngOnInit() {
  }

}
