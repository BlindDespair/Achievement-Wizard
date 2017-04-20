import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private isAuthorized = new BehaviorSubject<boolean>(false);
  isAuthorized$ = this.isAuthorized.asObservable();
  constructor() {}
  setIsAuthorized(isAuthorized: boolean) {
    this.isAuthorized.next(isAuthorized);
  }
  getIsAuthorized() {
    return this.isAuthorized.getValue();
  }

}
