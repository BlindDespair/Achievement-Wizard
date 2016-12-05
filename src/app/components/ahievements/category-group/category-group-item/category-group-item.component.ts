import {Component, OnInit, Input} from '@angular/core';
import {CategoryGroup} from "../../../../shared/achievements.model";

@Component({
  selector: 'app-category-group-item',
  templateUrl: 'category-group-item.component.html',
  styleUrls: ['category-group-item.component.scss']
})
export class CategoryGroupItemComponent implements OnInit {

  @Input() categoryGroup: CategoryGroup;
  listShow: boolean;

  constructor() {
    this.listShow = false;
  }

  ngOnInit() {
  }

  listToggle(){
    this.listShow = !this.listShow;
  }
}
