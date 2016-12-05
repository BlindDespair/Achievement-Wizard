import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {CategoryGroup} from "../../../shared/achievements.model";

@Component({
  selector: 'app-category-group',
  templateUrl: 'category-group.component.html',
  styleUrls: ['category-group.component.scss']
})
export class CategoryGroupComponent implements OnInit {

  @Output() loadCategoryGroupData:EventEmitter<any>;
  @Input() categoryGroups:CategoryGroup[];

  constructor() {
    this.loadCategoryGroupData = new EventEmitter();
  }

  ngOnInit() {
    this.loadCategoryGroupData.emit();
  }
}
