import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private sortFiler = new BehaviorSubject('default sorting');
  currentSortFilter = this.sortFiler.asObservable();

  private addToCart = new BehaviorSubject('default cart');
  currentItemToCart = this.addToCart.asObservable();

  private totalCartItems = new BehaviorSubject('total cart');
  totalItemsInCart = this.totalCartItems.asObservable();

  private min_max_val = new BehaviorSubject('min_max_val');
  min_max_val_obs = this.min_max_val.asObservable();

  private searchedText = new BehaviorSubject('min_max_val');
  searchedTextObs = this.searchedText.asObservable();

  constructor() { }

  changeSortFilter(filter: string) {
    this.sortFiler.next(filter)
  }

  updateCartItems(item) {
    this.addToCart.next(item)
  }

  getTotalCartItems(total_items){
    this.totalCartItems.next(total_items);
  }

  update_min_max_val(range){
    this.min_max_val.next(range);
  }

  getSearchedText(searchText){
    this.searchedText.next(searchText);
  }

}
