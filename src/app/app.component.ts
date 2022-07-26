import { Component, OnInit } from '@angular/core';
import { Beer } from './models/beer';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'birreria';

  // beerArray:Beer[] = []

  constructor(private apiServ:ApiService){

  }

  ngOnInit(): void {
  }
}
