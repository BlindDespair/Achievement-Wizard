import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Category} from '../../../../../shared/achievements.model';

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() categories: Category[];
  @Output() categoryOpened: EventEmitter<Category>;

  constructor() {
    this.categoryOpened = new EventEmitter<Category>();
  }

  ngOnInit() {
  }

  openCategory(category: Category) {
    this.categoryOpened.emit(category);
  }
}
