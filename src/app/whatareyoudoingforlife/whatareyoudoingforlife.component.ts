import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatareyoudoingforlife',
  templateUrl: './whatareyoudoingforlife.component.html',
  styleUrls: ['./whatareyoudoingforlife.component.css']
})
 // job = prompt("Wprowadz tutaj wartosc");
export class WhatareyoudoingforlifeComponent implements OnInit {

  job: string = "Programista";


  constructor() { }

  ngOnInit(): void {
  }

}

