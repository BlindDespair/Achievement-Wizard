import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-achievements-search-form',
  templateUrl: './achievements-search-form.component.html',
  styleUrls: ['./achievements-search-form.component.scss']
})
export class AchievementsSearchFormComponent implements OnInit {
  @ViewChild('searchRequest') searchInput: ElementRef;
  @Output() onSearch: EventEmitter<any>;
  isSearching: boolean;
  searching: Observable<any>;
  constructor() {
    this.onSearch = new EventEmitter();
    this.isSearching = false;
  }

  ngOnInit() {}

  openSearch() {
    this.isSearching = true;
    this.searching = Observable.fromEvent(this.searchInput.nativeElement, 'keyup');
    console.log(this.searching);
    this.onSearch.emit({isSearching: this.isSearching, searchingObservable: this.searching});
  }
  closeSearch(value: string) {
    if (value.length === 0) {
      this.isSearching = false;
      this.onSearch.emit({isSearching: this.isSearching});
    }
  }
}
