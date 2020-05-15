import { Component, OnInit } from '@angular/core';
import { EventHelperService } from 'src/app/service/event-helper.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchInput:string;
  constructor(private evnt:EventHelperService) { }

  ngOnInit(): void {
  }

  onKeyUp():void{
    this.evnt.onSearchEvent(this.searchInput);
  }
}
