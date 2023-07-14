import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserApiService } from '../services/user-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!:FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserApiService
    ){}
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })    
  }
  get f() {return this.form.controls;}
  
  onSubmit(){
    this.submitted = true
    if(this.form.invalid){
      return
    }
    let jsonData = {'username':this.f['username'].value , 'password':this.f['password'].value}
    this.userService.loginUser(jsonData).subscribe(data=>{
      localStorage.setItem('userID',data['user_id'])
      alert("Login is Successful")
      this.router.navigateByUrl('/')
    },error=>{
      alert("Username or password was incorrect, please check the details")
    })
  }

}
