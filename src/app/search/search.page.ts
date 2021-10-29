import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { IonicAuthService } from '../ionic-auth.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public list: any[];
  public loadlist: any[];
  liste: any [];

  constructor(private authService: IonicAuthService,
    private rtDatabase: AngularFireDatabase ) {
      this.listUsers()}
  listUsers() {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.rtDatabase.list('users').valueChanges().subscribe(list=>{
      this.list = list;
      this.loadlist = list;
    })
  }
  initializeItems(): void{
    this.list = this.loadlist;
  }
  filterlist(evt){
    this.initializeItems();

    const searchTerm = evt.srcElement.value;

    if(!searchTerm){
      return;
    }
    this.list = this.list.filter(currentList=>{
      if(currentList.nom && searchTerm){
        if(currentList.nom.tolowerCase().indexof(searchTerm.tolowerCase()) > -1){
          return true;
        }
        return false
      }
    });
  }
  Database(arg0: string) {
    throw new Error('Method not implemented.');
  }

}
