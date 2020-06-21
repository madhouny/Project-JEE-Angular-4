import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DataService } from '../data.service';
import { User } from '../user.model';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
pageContact$:User[];
  constructor(private dataService:DataService) { }

  ngOnInit() {

return this.dataService.getUsers().subscribe(data=>this.pageContact$=data)
 /*let resp = this.http.get("http://localhost:8080/chercherContact?mc=a&page=0&size=5")
 resp.subscribe((data)=>this.pageContact=data);*/
  }

}
