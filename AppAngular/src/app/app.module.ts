import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import{ModalModule} from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AudiosService} from './audios.service';
import { AudiosComponent } from './componentes/audios/audios.component';




@NgModule({
  declarations: [
    AppComponent,
    AudiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()

  ],
  providers: [HttpClientModule,AudiosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
