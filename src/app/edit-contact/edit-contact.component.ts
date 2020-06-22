import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  mode:number=1;
  contact:User=new User();
  idC:number;
  constructor(public activatedRoute:ActivatedRoute, public dataService:DataService
    ,public route:Router) { 
    console.log(activatedRoute.snapshot.params['id'])
  }

  ngOnInit() {
    this.dataService.getC(this.activatedRoute.snapshot.params['id'])
    .subscribe(data=>{
      
      this.contact=data;
      
    },err=>{
      console.log(err);
    });
  }

  update(){
    this.dataService.updateContact(this.contact)
    .subscribe(data=>{
      console.log(data)
      alert("mise a jour effectué")
      this.route.navigate(['contacts']);
    })
  }

}
