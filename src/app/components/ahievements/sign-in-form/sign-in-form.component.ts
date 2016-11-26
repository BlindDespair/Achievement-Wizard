import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: 'sign-in-form.component.html',
  styleUrls: ['sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  @Output() authorizated: EventEmitter<string>;

  constructor() {
    this.authorizated = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  authorize(apiKey: string){
    if(apiKey){
      this.authorizated.emit(apiKey);
    }
  }

}
