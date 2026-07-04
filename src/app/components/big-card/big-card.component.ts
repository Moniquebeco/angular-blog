import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover: string = "" //Definida no html
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = "Description"
  @Input()
  Id:string="0"

  constructor() {

  }

  ngOnInit(): void {
  }

}
