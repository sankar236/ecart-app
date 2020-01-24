import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  searchItems(){
    let searchText = (document.getElementById('search') as HTMLInputElement).value;
    this.dataService.getSearchedText(searchText);
  }

}
