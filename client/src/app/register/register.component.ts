import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { first } from 'rxjs'

import { UserApiService } from '../services/user-api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form!: FormGroup
  loading = false
  submitted = false
  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router:Router,
    private userService:UserApiService
  ){}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullname: ['',[Validators.required,Validators.maxLength(40)]],
      username: ['',[Validators.required,Validators.maxLength(40)]],
      email   : ['',[Validators.required,Validators.email]],
      dob     : ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }
  get f(){return this.form.controls}
  onSubmit(){
    let jsonData = {'name':this.f['fullname'].value ,
                    'username':this.f['username'].value , 
                    'password':this.f['password'].value ,
                    'email' : this.f['email'].value,
                    'dob': this.f['dob'].value
                    }
    this.userService.addUser(jsonData).subscribe(next=>{
      alert("Registration was successful")
      this.router.navigateByUrl("login")
    },error=>{
      alert("Username is taken")
    })
    
  }
}
