import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  filterItems(){
    var min_val = (document.getElementById('price-min') as HTMLInputElement).value;
    var max_val = (document.getElementById('price-max') as HTMLInputElement).value;
    this.dataService.update_min_max_val({min:min_val,max:max_val});
  }

}
