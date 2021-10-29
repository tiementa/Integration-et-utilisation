import { Component, OnInit } from '@angular/core';
import { IonicAuthService } from '../ionic-auth.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  users: any;
  FullName: any;
  email: any;
  userId:any;

  constructor(
    public authservice: IonicAuthService,
    private db: AngularFireDatabase,
    private auth: AngularFireAuth
  ) { }

  async ngOnInit() {
    this.auth.authState.subscribe(
      (res)=>{
        this.userId= res.uid;
        console.log(this.userId);
        this.db.list('users/' +this.userId).valueChanges().subscribe(
          data=>{
            this.FullName= data[0];
            this.email= data[1];
            console.log(this.FullName);
            
          }
        )
      }
    )
    this.authservice.users.subscribe((users) =>
      {
        this.users = users;
        console.log(this.users);
      });
  }

}
