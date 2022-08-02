import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
import {  FormGroup} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup | any;
  constructor(
    private router:Router
  ) { 
    
  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.signupForm.valid){
      return;
    }
    localStorage.setItem('user',this.signupForm.value)
    this.router.navigate(['/home'])
  }
}
