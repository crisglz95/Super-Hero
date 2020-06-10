import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Archivo de Rutas
import { appRouting } from './app.routes';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { DetailHeroComponent } from './components/detail-hero/detail-hero.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardHeroComponent,
    DetailHeroComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
