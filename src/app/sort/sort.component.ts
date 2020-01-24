import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  sortData(attr){
    switch(attr){
      case 0: 
        (document.getElementsByClassName('highlow')[0] as HTMLSpanElement).style.color = 'green'; 
        (document.getElementsByClassName('lowhigh')[0] as HTMLSpanElement).style.color = 'black'; 
        (document.getElementsByClassName('discount')[0] as HTMLSpanElement).style.color = 'black'; 
        break;
      case 1: 
        (document.getElementsByClassName('highlow')[0] as HTMLSpanElement).style.color = 'black'; 
        (document.getElementsByClassName('lowhigh')[0] as HTMLSpanElement).style.color = 'green'; 
        (document.getElementsByClassName('discount')[0] as HTMLSpanElement).style.color = 'black';
        break;
      case 2: 
        (document.getElementsByClassName('highlow')[0] as HTMLSpanElement).style.color = 'black'; 
        (document.getElementsByClassName('lowhigh')[0] as HTMLSpanElement).style.color = 'black'; 
        (document.getElementsByClassName('discount')[0] as HTMLSpanElement).style.color = 'green';
        break;
    }
    this.dataService.changeSortFilter(attr);
  }

}
