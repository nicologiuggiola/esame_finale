import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

  }

  getAPI(){
    return this.http.get<any>('https://api.punkapi.com/v2/beers')
  }
}
