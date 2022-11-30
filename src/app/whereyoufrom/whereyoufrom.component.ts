import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-whereyoufrom',
  templateUrl: './whereyoufrom.component.html',
  styleUrls: ['./whereyoufrom.component.css']
})
export class WhereyoufromComponent implements OnInit {



  @Input() city: string= "";


  constructor() { }

  ngOnInit(): void {
  }

}
