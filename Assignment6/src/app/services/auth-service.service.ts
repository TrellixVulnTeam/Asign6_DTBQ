import { Injectable } from '@angular/core';
import { employee } from '../Models/employee';
import { Observable,throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  endpoint: string = 'http://localhost:4000/';
  headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http: HttpClient) { }

  addData(user: employee): Observable<any>{
    const api = `${this.endpoint}Users`;
    return this.http.post(api, user).pipe( catchError(this.handleError))
  }

  getData(): Observable<any>{
    const api = `${this.endpoint}Users`;
    return this.http.get(api).pipe(
      map((res:any)=>{
        return res || {}
      }),catchError(this.handleError)
    )
  }

  getDataUpdated(id:number): Observable<any>{
    const api = `${this.endpoint}Users/${id}`;
    return this.http.get(api).pipe(
      map((res)=>{
        console.log(res)
        return res  || {}
      }),catchError(this.handleError)
    )
  }
  updateData(user: employee,id:number): Observable<any>{
    const api = `${this.endpoint}Users/${id}`;
    return this.http.put(api, user).pipe( catchError(this.handleError))
  }
  
  deleteData(id:number): Observable<any>{
    const api = `${this.endpoint}Users/${id}`;
    alert("Sukses Deleted")
    return this.http.delete(api, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  })
  }
  handleError(error: HttpErrorResponse){
    let msg = '';
    if(error.error instanceof ErrorEvent){
      msg = error.error.message;
    }else{
      msg = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    alert(msg)
    return throwError(msg)
  }

}
