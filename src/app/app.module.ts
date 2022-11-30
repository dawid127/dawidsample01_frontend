import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhereyoufromComponent } from './whereyoufrom/whereyoufrom.component';
import { WhatareyoudoingforlifeComponent } from './whatareyoudoingforlife/whatareyoudoingforlife.component';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    WhereyoufromComponent,
    WhatareyoudoingforlifeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
