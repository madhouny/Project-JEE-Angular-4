import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact:User=new User();
  mode:number=1;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  } 

  saveContact(){
    this.dataService.saveContact(this.contact)
    .subscribe(data=>{
      this.contact=data;
      this.mode=2;
    },err=>{
      console.log(err);
    });
  }

}
