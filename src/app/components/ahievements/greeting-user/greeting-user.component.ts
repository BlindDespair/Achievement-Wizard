import {Component, OnInit, Input} from '@angular/core';
import {Account} from "../../../shared/achievements.model";

@Component({
  selector: 'app-greeting-user',
  templateUrl: 'greeting-user.component.html',
  styleUrls: ['greeting-user.component.scss']
})
export class GreetingUserComponent implements OnInit {

  @Input() account: Account;
  constructor() {

  }

  ngOnInit() {
  }

}
