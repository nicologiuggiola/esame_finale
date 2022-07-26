import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  beerArray:Beer[] = []
  
  constructor(private apiServ:ApiService) { }

  ngOnInit(): void {
    this.apiServ.getAPI().subscribe(data => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let newBeer:Beer = {name:data[i].name, abvolume:data[i].abv, description:data[i].description, tagline:data[i].tagline, imgurl:data[i].image_url}
        this.beerArray.push(newBeer)
      }
    })
  }

}
