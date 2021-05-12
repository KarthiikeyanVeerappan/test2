import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myc-hyd',
  templateUrl: './myc-hyd.component.html',
  styleUrls: ['./myc-hyd.component.css']
})
export class MycHydComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Users=[
    {"UserID":101,"UserName":"Karthi","Location":"Bangalore"},
    {"UserID":102,"UserName":"Seenu","Location":"Mysore"},
    {"UserID":103,"UserName":"Mani","Location":"Hyderabad"},
    {"UserID":104,"UserName":"Kanna","Location":"Bangalore"},
    {"UserID":105,"UserName":"Raj","Location":"Mysore"},
    {"UserID":106,"UserName":"Guru","Location":"Hyderabad"},
    {"UserID":107,"UserName":"Sriram","Location":"Bangalore"},
    {"UserID":108,"UserName":"Ashwin","Location":"Mysore"},
    {"UserID":109,"UserName":"Bala","Location":"Hyderabad"},
    {"UserID":110,"UserName":"Mishra","Location":"Bangalore"},
    {"UserID":111,"UserName":"Vishnu","Location":"Mysore"},
    {"UserID":112,"UserName":"Gopi","Location":"Hyderabad"}
  ];

}
