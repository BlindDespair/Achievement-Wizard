import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {CategoryGroup, Category} from '../../../shared/achievements.model';

@Component({
  selector: 'app-category-group',
  templateUrl: 'category-group.component.html',
  styleUrls: ['category-group.component.scss']
})
export class CategoryGroupComponent implements OnInit {

  @Output() loadCategoryGroupData: EventEmitter<any>;
  @Output() categoryOpened: EventEmitter<Category>;
  @Input() categoryGroups: CategoryGroup[];

  constructor() {
    this.loadCategoryGroupData = new EventEmitter();
    this.categoryOpened = new EventEmitter<Category>();
  }

  ngOnInit() {
    this.loadCategoryGroupData.emit();
  }

  openCategory(category: Category) {
    this.categoryOpened.emit(category);
  }
}
