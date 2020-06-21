import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private http:HttpClient) { }

  getUsers(motCle:string,page:number,size:number):Observable<any>{
     
    let resp = this.http.get("http://localhost:8080/chercherContact?mc="+motCle+"&page="+page+"&size="+size)
    return resp;
  }

  saveContact(contact:User):Observable<any>{
    return this.http.post("http://localhost:8080/contacts",contact)
  }
}


