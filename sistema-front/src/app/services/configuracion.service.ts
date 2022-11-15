// import { Injectable } from "@angular/core";
// import { ResponseI } from '../modelos/response.interface';
// import { loginI } from '../modelos/login.interface';
// import { HttpClient } from '@angular/common/http'
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class configuracionServices {

  // url:string = "http://localhost:8000/usuario";


//   constructor(private http:HttpClient) { }
  
//   hired(data:any): Observable <any>{
//     return this.http.get<any>(`${this.url}`);
//   }

// } 1

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class configuracionServices {

   private API_configuracion = "http://localhost:8000/hired/";

   constructor(private http: HttpClient) {}

   public getAllconfiguracion(): Observable<any>{
    return this.http.get(this.API_configuracion);
   }

   public editconfiguracion(id:string): Observable<any>{
    return this.http.put(this.API_configuracion, id);
   }
  
}

// export class configuracionServices {

//     constructor(private http: HttpClient) {}

//     public get (url:string){
//       return this.http.get(url);
//     }


// }