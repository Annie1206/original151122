import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ResponseI } from "../modelos/response.interface";

@Injectable({
  providedIn: 'root'
})

export class EmpleadoslcServices {

   private API_EMPLEADOSLC = "http://localhost:8000/";

   constructor(private http: HttpClient) {}

   public getAllFijos(): Observable<any>{
    return this.http.get(`${this.API_EMPLEADOSLC}empleadoslc/empleadoslc/`);
   }

   createEmpleados(data:any): Observable<any>{
    console.log(data)
    return this.http.post<any>(`${this.API_EMPLEADOSLC}empleadoslc/empleadoslc/`,data);
   }

   updateEmpleados(data:any, id:any): Observable<any>{
    console.log(id)
  return this.http.put<any>(`${this.API_EMPLEADOSLC}empleadoslc/empleadoslc/${id}/`, data);
   }


   deleteEmpleados(id:number): Observable<any>{
    return this.http.delete(this.API_EMPLEADOSLC);
   }





}
