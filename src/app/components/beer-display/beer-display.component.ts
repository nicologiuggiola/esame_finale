import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';

@Component({
  selector: 'app-beer-display',
  templateUrl: './beer-display.component.html',
  styleUrls: ['./beer-display.component.scss']
})
export class BeerDisplayComponent implements OnInit {

  @Input() public beer!: Beer;
  

  constructor() { }

  ngOnInit(): void {
  }

}
