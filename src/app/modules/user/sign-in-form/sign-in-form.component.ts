import {
  Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, AfterViewInit,
  OnChanges
} from '@angular/core';
import 'bootstrap';
declare var $: any;

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild('apiKeyInput') apiKeyInput: ElementRef;
  @Input() error: any;
  @Output() authorized: EventEmitter<string>;

  constructor() {
    this.authorized = new EventEmitter<string>();
  }

  ngOnInit() {}
  ngAfterViewInit() {
    $(this.apiKeyInput.nativeElement).popover();
  }
  ngOnChanges() {
    if (this.error) {
      console.log(this.error.status);
      switch (this.error.status) {
        case 403:
          $(this.apiKeyInput.nativeElement).popover('show');
          break;
        default:
          break;
      }
    } else {
      $(this.apiKeyInput.nativeElement).popover('hide');
    }
  }

  authorize(apiKey: string) {
    if (apiKey) {
      this.authorized.emit(apiKey);
    }
  }

}
