import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Account} from '../../shared/achievements.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  error: any;
  @Input() isAuthorized: boolean;
  @Input() account: Account;
  @Output() authorizated: EventEmitter<string>;
  @Output() greeting: EventEmitter<any>;
  @Output() logedout: EventEmitter<any>;
  constructor() {
    this.isAuthorized = false;
    this.authorizated = new EventEmitter<string>();
    this.greeting = new EventEmitter();
    this.logedout = new EventEmitter();
  }

  ngOnInit() {
    if (localStorage.getItem('api_key')) {
      this.isAuthorized = true;
    }
  }

  onAutorized(apiKey: string) {
    if (apiKey) {
      this.authorizated.emit(apiKey);
    }
  }
  onLogout() {
    this.logedout.emit();
  }
  onGreeting() {
    this.greeting.emit();
  }

}
