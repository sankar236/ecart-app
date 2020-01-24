import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  rows = [];
  shoppingItemsMaster:any = [];
  shoppingItems:any = [];

  filter;
  filteredShoppingItems: any = [];
  searchText;
  searchedShoppingItems: any = [];
  sortBy;
  isAsc:boolean = true;

  constructor(private shopservice: ShoppingService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentSortFilter.subscribe(filter => {
      this.filter = filter;
      this.sortShoppingItems(this.filter);
    });

    this.dataService.searchedTextObs.subscribe(searchText => {
      this.searchText = searchText;
      this.searchedShoppingItems = this.searchShoppingItems(this.searchText);
      this.updateShoppingItems();
    });

    this.dataService.min_max_val_obs.subscribe(priceRange => {
      this.filteredShoppingItems = this.filterShoppingItems(priceRange);
      this.updateShoppingItems();
    });

    this.shopservice.getShoppingItems().subscribe(res=>{
      this.shoppingItemsMaster = res;
      this.shoppingItems = this.shoppingItemsMaster;
      this.filteredShoppingItems = this.shoppingItemsMaster;
      this.searchedShoppingItems = this.shoppingItemsMaster;
      this.calcDisplayRows(); 
    }, err=>{
 
    });
  }

  calcDisplayRows(){
    var displayRows = 0;
    if(this.shoppingItems.length>0){
      displayRows = Math.ceil(this.shoppingItems.length/4);
    }
    this.rows = Array(displayRows).fill(0);
  }

  sortShoppingItems(sortby){
    switch(sortby){
      case 0 : 
        this.shoppingItems.sort((a,b)=>{ return b.price-a.price});
        break;
      case 1 : 
        this.shoppingItems.sort((a,b)=>{ return a.price-b.price});
        break;
      case 2 : 
        if(this.isAsc) this.shoppingItems.sort((a,b)=>{ return a.discount-b.discount});
        else this.shoppingItems.sort((a,b)=>{ return b.discount-a.discount});
        this.isAsc = !this.isAsc;
        break;
    }
    this.sortBy = sortby;
  }

  filterShoppingItems(priceRange){
    let min = priceRange['min'];
    let max = priceRange['max'];
    let filteredItems = [];
    this.shoppingItemsMaster.forEach(item => {
      if(item.price>=min && item.price<=max){
        filteredItems.push(item);
      }
    });
    return filteredItems;
  }

  searchShoppingItems(searchText){
    if(searchText){
      let searchedItems = [];
      this.shoppingItemsMaster.forEach(item => {
        if(item.name.toLowerCase().search(searchText.toLowerCase())>=0){
          searchedItems.push(item);
        }
      });
      return searchedItems;
    }
    return this.shoppingItems;
  }

  updateShoppingItems(){
    let updatedShoppingItems = this.filteredShoppingItems.filter(item => this.searchedShoppingItems.includes(item));
    this.shoppingItems = updatedShoppingItems;
    this.calcDisplayRows();
    this.sortShoppingItems(this.sortBy);
  }

  addItemToCart(item){
    this.dataService.updateCartItems(this.shoppingItems[item]);
  }

}
