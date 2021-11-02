import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ActivatedRoute } from '@angular/router';
import { employee } from 'src/app/Models/employee';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  employee_id: number
  datas:employee[] = []


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
  constructor(public AuthService:AuthServiceService,public Router:Router,activatedRoute: ActivatedRoute) {
    this.employee_id = activatedRoute.snapshot.params.id
   }

  setData(id:number){
    this.AuthService.getDataUpdated(id).subscribe((res:any[]) => {
      this.datas = res
      this.onEdit(this.datas)
    })

  }
  onEdit(datas: any){
    this.form.inputData.controls['title'].setValue(datas.title)
    this.form.inputData.controls['firstname'].setValue(datas.firstName)
    this.form.inputData.controls['lastname'].setValue(datas.lastName)
    if(datas.role == "Admin"){
      this.form.inputData.controls['role'].setValue("0")
    }else{
      this.form.inputData.controls['role'].setValue("1")
    }
    this.form.inputData.controls['email'].setValue(datas.email)
    this.form.inputData.controls['password'].setValue("mikado123")
    this.form.inputData.controls['confirmpassword'].setValue("mikado123")
  }

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

  UpdateEmployee(employee_id:number){
    console.log(this.form.inputData.value)
    this.AuthService.updateData(this.form.inputData.value,employee_id)
    .subscribe((res) =>{
      if(res){
        this.form.inputData.reset()
        this.Router.navigate(['home'])
      }
    })
  }
  ngOnInit(): void {
    this.setData(this.employee_id)
  }
}
