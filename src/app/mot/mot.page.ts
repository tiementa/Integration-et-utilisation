import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { AlertController, IonButtons } from '@ionic/angular';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-mot',
  templateUrl: './mot.page.html',
  styleUrls: ['./mot.page.scss'],
})
export class MotPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }
async show() {
  let alert = await this.alertCtrl.create({
    header:"Confirmation",
    subHeader:"Email",
    message:"Confirmer le lien envoyé par mail",
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

}
