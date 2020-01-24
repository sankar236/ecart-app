import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = [];
  totalCount = 0;

  constructor(private _router: Router, private dataService: DataService) {}

  ngOnInit() {
    var saved_cart_items = localStorage.getItem('cart_items');
    if(saved_cart_items) this.cartItems = JSON.parse(saved_cart_items);

    var saved_total_count = localStorage.getItem('cart_count');
    if(saved_total_count) this.totalCount = parseInt(saved_total_count);

    this.dataService.currentItemToCart.subscribe(item => {
      if(item['id']){
        let index = this.cartItems.findIndex(obj => { return obj.id === item['id'] });
        if(index>=0) this.cartItems[index].count++;
        else{
          item['count'] = 1;
          this.cartItems.push(item);
        }
        this.totalCount++;
        localStorage.setItem('cart_count',this.totalCount.toString());
      }
      if(this.cartItems.length>0) localStorage.setItem('cart_items', JSON.stringify(this.cartItems));
    });   
  }

  moveToCart(){
    this.dataService.getTotalCartItems(this.cartItems);
    this._router.navigate(['/cartDetails']);
  }

  
}
