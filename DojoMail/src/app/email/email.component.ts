import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmailComponent implements OnInit {
  email:Array<{[key:string]:string|boolean}>=[
    {email:"bill@gates.com",Importance:true,Subject:"New Windows",Content:"Windows XI will launch in year 2100."},
    {email:"ada@lovelace.com",Importance:true,Subject:"Programming",Content:"Enchantress of Numbers"},
    {email:"john@carmac.com",Importance:false,Subject:"Updated Algo",Content:"New algorithm for shadow volumes"},
    {email:"gabe@newel.com",Importance:false,Subject:"HL3!",Content:"Just kidding..."}
  ]
  constructor() { }

  ngOnInit() {
  }

}
