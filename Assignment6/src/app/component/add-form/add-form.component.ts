import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  form = {
    inputData: new FormGroup({
      title:new FormControl('',[Validators.required,Validators.minLength(5)]),
      firstname:new FormControl('',[Validators.required,Validators.minLength(2)]),
      lastname:new FormControl('',[Validators.required,Validators.minLength(2)]),
      role:new FormControl('',[Validators.required,Validators.minLength(1),Validators.pattern("^[0-1]*$"),Validators.maxLength(1)]),
      password: new FormControl('',[Validators.required,Validators.minLength(5)]),
      confirmpassword: new FormControl('',[Validators.required,Validators.minLength(5)]),
      email: new FormControl('',[Validators.required,Validators.email])
    })
  }
  constructor(public AuthService:AuthServiceService,public Router:Router) { }

  get Title(){
    return this.form.inputData.get('title')
  }
  get Firstname(){
    return this.form.inputData.get('firstname')
  }
  get Lastname(){
    return this.form.inputData.get('lastname')
  }
  get Role(){
    return this.form.inputData.get('role')
  }
  get Email(){
    return this.form.inputData.get('email')
  }
  get Password(){
    return this.form.inputData.get('password')
  }
  get Confirmpassword(){
    return this.form.inputData.get('confirmpassword')
  }
  AddEmployee(){
    this.AuthService.addData(this.form.inputData.value)
    .subscribe((res) =>{
      if(res){
        this.form.inputData.reset()
        this.Router.navigate(['home'])
      }
    })
  }
  ngOnInit(): void {
    
  }

 
}
