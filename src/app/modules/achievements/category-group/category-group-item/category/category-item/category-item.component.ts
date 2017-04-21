import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Category} from '../../../../../../shared/achievements.model';

@Component({
  selector: 'app-category-item',
  templateUrl: 'category-item.component.html',
  styleUrls: ['category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  @Input() category: Category;
  @Input() currentlyOpenedCategory: Category;
  @Output() categoryOpened: EventEmitter<Category>;
  constructor() {
    this.categoryOpened = new EventEmitter<Category>();
  }

  ngOnInit() {
  }

  openCategory() {
    this.categoryOpened.emit(this.category);
  }

}
