import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient) { }

  private api = "http://localhost:3001/api/imports";




  public getAll(): Observable<any>{
   return this.http.get(this.api);
  
    }

}


