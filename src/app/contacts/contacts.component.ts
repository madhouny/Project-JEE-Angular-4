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
public pageContact$:Array<any>;
public pages:Array<number>;
motCle:string="";
page:number=0;
size:number=3;

  constructor(private dataService:DataService) { }
 
  ngOnInit() {

 
 
  }
  doSearch(){
    this.dataService.getUsers(this.motCle,this.page,this.size).
    subscribe(data=>{
      
      this.pageContact$=data['content'];
      this.pages = new Array(data['totalPages'])
    },err=>{console.log(err);
    })
  
  }
  chercher(){
    this.doSearch();
  }
  setPage(i,event:any){
    event.preventDefault();
    this.page=i;
    this.doSearch();
  }
}
