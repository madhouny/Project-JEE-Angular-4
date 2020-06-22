import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

  onSaveContact(dataForm){
    console.log(dataForm);
    this.dataService.saveContact(dataForm)
    .subscribe(data=>{
      console.log(data);
    },err=>{
      console.log("Erreur")
    });
  }

}
