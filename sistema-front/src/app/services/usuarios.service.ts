import { Injectable } from "@angular/core";
import { ResponseI } from '../modelos/response.interface';
import { loginI } from '../modelos/login.interface';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url:string = "http://localhost:8000/";


  constructor(private http:HttpClient) { }

  private API_USUARIOS = "http://localhost:8000/";
 
  login(data:any): Observable <any>{
    return this.http.post<any>(`${this.url}`,data);
  }

       public getAllUsuarios(): Observable<any>{
     return this.http.get(`${this.API_USUARIOS}usuario/`);
    }
    
    createUsuarios(data:any): Observable<any>{
     console.log(data) 
     return this.http.post<any>(`${this.API_USUARIOS}usuario/`,data); 
    }
 
    updateUsuarios( id:any): Observable<any>{
     console.log(id)   
   return this.http.put<any>(`${this.API_USUARIOS}usuario/${id}`, id);
    } 
 
 
    deleteUsuarios(id:number): Observable<any>{
     return this.http.delete(this.API_USUARIOS);
    }
 
 
 
   
   
 

}
