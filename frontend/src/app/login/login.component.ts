import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
import {  FormGroup} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={uname:'',
  password:''}
  
  loginForm : FormGroup | any;
  title ='book_app'

  constructor(
    private router:Router
  ) { 

  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.loginForm.valid){
      return;
    }
    localStorage.setItem('user',this.loginForm.value)
    this.router.navigate(['/home'])
  }
}