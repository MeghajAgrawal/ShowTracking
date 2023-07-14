import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../services/user-api.service';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user:any= {}
  form!: FormGroup
  submitted = false
  editForm = false
  constructor(private userService:UserApiService,
              private formBuilder:FormBuilder){}
  
  ngOnInit(): void {
    this.getUserInfo()
    this.form = this.formBuilder.group({
      fullname: ['',[Validators.required,Validators.maxLength(40)]],
      email   : ['',[Validators.required,Validators.email]],
      dob     : ['',[Validators.required]],
    });
  }
  get f(){return this.form.controls}
  activateEditForm(){
    this.editForm = !this.editForm
    this.form.patchValue({
      fullname: this.user.name,
      email:this.user.email,
      dob: this.user.dob
    })
  }
  getUserInfo(){
    this.userService.getUser(localStorage.getItem('userID')).subscribe(data=>{this.user = data})
  }
  onSubmit(){
    let jsonData = {'user_id':localStorage.getItem('userID'),
                    'name':this.f['fullname'].value ,
                    'email' : this.f['email'].value,
                    'dob': this.f['dob'].value
                    }
    this.userService.updateUser(jsonData).subscribe(next=>{
      alert("Update was successful")
      this.editForm = !this.editForm
    },error=>{
      alert("An Error was encountered")
    })
  }
}
