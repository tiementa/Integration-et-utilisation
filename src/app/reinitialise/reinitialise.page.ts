import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reinitialise',
  templateUrl: './reinitialise.page.html',
  styleUrls: ['./reinitialise.page.scss'],
})
export class ReinitialisePage implements OnInit {

  constructor(private alertCtrl: AlertController,) { }
  async show() {
    let alert = await this.alertCtrl.create({
      header:"Reinitialisation",
      subHeader:"Mot de passe",
      message:"Veuillez changer votre mot de passe",
      buttons: [
        {
          text:"ok",
         
          handler: () => {
          
          }
        }
  
      ]
  
    });
    alert.present()
  }
    ngOnInit() {
    }
  
  }{ }
