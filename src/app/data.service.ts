import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrl=  'http://localhost:8080/chercherContact?mc=a&page=0&size=5'
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.apiUrl)
  }
}


