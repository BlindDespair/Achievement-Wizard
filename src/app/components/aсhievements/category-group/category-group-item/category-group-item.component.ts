import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CategoryGroup, Category} from '../../../../shared/achievements.model';

@Component({
  selector: 'app-category-group-item',
  templateUrl: 'category-group-item.component.html',
  styleUrls: ['category-group-item.component.scss']
})
export class CategoryGroupItemComponent implements OnInit {

  @Input() categoryGroup: CategoryGroup;
  @Output() categoryOpened: EventEmitter<Category>;
  listShow: boolean;

  constructor() {
    this.listShow = false;
    this.categoryOpened = new EventEmitter<Category>();
  }

  ngOnInit() {
  }

  listToggle() {
    this.listShow = !this.listShow;
  }

  openCategory(category: Category) {
    this.categoryOpened.emit(category);
  }
}
