import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhereyoufromComponent } from './whereyoufrom/whereyoufrom.component';
import { WhatareyoudoingforlifeComponent } from './whatareyoudoingforlife/whatareyoudoingforlife.component';


@NgModule({
  declarations: [
    AppComponent,
    WhereyoufromComponent,
    WhatareyoudoingforlifeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
