import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  url = 'https://api.myjson.com/bins/qzuzi';

  constructor(private http: HttpClient) { }

  getShoppingItems(){
    return this.http.get(this.url);
  }
}
