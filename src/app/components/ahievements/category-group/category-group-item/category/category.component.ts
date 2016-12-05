import {Component, OnInit, Input} from '@angular/core';
import {Category} from "../../../../../shared/achievements.model";

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() categories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
