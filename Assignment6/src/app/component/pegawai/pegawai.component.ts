import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ActivatedRoute } from '@angular/router';
import { employee } from 'src/app/Models/employee';
@Component({
  selector: 'app-pegawai',
  templateUrl: './pegawai.component.html',
  styleUrls: ['./pegawai.component.css']
})
export class PegawaiComponent implements OnInit {
  datas:employee[] = []
  id:number
  constructor(public authService: AuthServiceService,public Router:Router,private actRoute: ActivatedRoute) { 
    this.id = actRoute.snapshot.params.id 
  }

  ngOnInit(): void {
    this.setData()
  }
  setData(){
    this.authService.getData().subscribe(res => {
      this.datas = res
    })
  }

  DeleteData(id:number){

    this.authService.deleteData(id).subscribe((response) => {
      this.setData()
    })
 
  }

}
