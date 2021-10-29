import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public utilisateur: any[];
  search:string;
  

  constructor(
    private rtDatabase:AngularFireDatabase
  ) { }

  ngOnInit() {
    this.rtDatabase.list('users/').valueChanges().subscribe(
      (res)=>{
        this.utilisateur=res; 
      }
    )
  }

}
