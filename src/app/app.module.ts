import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

export const firebaseConfig = {

  apiKey: "AIzaSyDbuAYe50WbVOf9xAuWXDSQ7GbMPfJ6AXk",

  authDomain: "login-page-3955a.firebaseapp.com",

  projectId: "login-page-3955a",

  storageBucket: "login-page-3955a.appspot.com",

  messagingSenderId: "900475397731",

  appId: "1:900475397731:web:5cd9223b14ae39d9b1fa56",

  measurementId: "G-D9SP2MGG6Q"

};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}