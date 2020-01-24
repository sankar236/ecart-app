import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  totalCartItems;
  totalCount=0;
  totalPrice=0;
  totalDiscount=0;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.totalItemsInCart.subscribe(items => {
      this.totalCartItems = items;
    });
    var saved_cart_items = localStorage.getItem('cart_items');
    if(saved_cart_items) this.totalCartItems = JSON.parse(saved_cart_items);
    this.updateTotalPriceAndDiscount();
  }

  removeItem(index){
    let count = this.totalCartItems[index].count;
    this.totalCount = parseInt(localStorage.getItem('cart_count'));
    this.totalCartItems.splice(index, 1);
    this.totalCount -= count;
    localStorage.setItem('cart_items',JSON.stringify(this.totalCartItems));
    localStorage.setItem('cart_count',(this.totalCount).toString());
    this.updateTotalPriceAndDiscount();
  }

  updateTotalPriceAndDiscount(){
    this.totalPrice = 0;
    this.totalCount = 0;
    this.totalDiscount = 0;
    this.totalCartItems.forEach(item => {
      this.totalCount+=item.count;
      this.totalPrice+=(900*item.count);
      this.totalDiscount+=((900 - item.price)*item.count);
    });
  }

  incrementValue(index){
    this.totalCartItems[index].count+=1;
    this.totalCount+=1;
    localStorage.setItem('cart_items',JSON.stringify(this.totalCartItems));
    localStorage.setItem('cart_count',(this.totalCount).toString());
    this.updateTotalPriceAndDiscount();
  }

  decrementValue(index){
    this.totalCartItems[index].count-=1;
    if(this.totalCartItems[index].count==0){
      this.totalCartItems.splice(index, 1);
    }
    this.totalCount-=1;
    localStorage.setItem('cart_items',JSON.stringify(this.totalCartItems));
    localStorage.setItem('cart_count',(this.totalCount).toString());   
    this.updateTotalPriceAndDiscount();
  }

}
