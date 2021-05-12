import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angularproject1';

  quantity:number=1
  DisableMinus:Boolean=false;
  ShowAll:Boolean=false;
  ShowBangalore:Boolean=false;
  ShowAllMysore:Boolean=false;
  ShowAllHyderabad:Boolean=false;
  filterString:string='';
  
  i=1;
  QuantityPlus(){
      this.i++;
      this.quantity=this.i;

      if(this.i!=0){
       this.DisableMinus=false;
      }
  }

  QuantityMinus(){
    this.i--;
    this.quantity=this.i;
    
    if(this.i==0){
      this.quantity=0;
     this.DisableMinus=true;

    }
   
  }

  
  BangaloreData(){
    this.ShowBangalore = true;
    this.ShowAll= false;
    this.ShowAllMysore= false;
    this.ShowAllHyderabad= false;
  }
  HyderabadData(){
    this.ShowBangalore = false;
    this.ShowAll= false;
    this.ShowAllMysore= false;
    this.ShowAllHyderabad= true;
  }
  MysoreData(){
    this.ShowBangalore = false;
    this.ShowAll= false;
    this.ShowAllMysore= true;
    this.ShowAllHyderabad= false;

  }
  AllData(){
    this.ShowBangalore = false;
    this.ShowAll= true;
    this.ShowAllMysore= false;
    this.ShowAllHyderabad= false;
    this.filterString='';
  }


  Users:any[] =[
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


