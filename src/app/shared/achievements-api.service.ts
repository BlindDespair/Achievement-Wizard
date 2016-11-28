import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Account} from "./achievements.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AchievementsApiService {

  constructor(private http: Http) { }

  getAccount(apiKey: string):Observable<Account>{
    return this.get(apiKey);
  }

  private get(apiKey: string):Observable<Account>{
   return this.http.get(`https://api.guildwars2.com/v2/account?access_token=${apiKey}`)
          .map(res => res.json())
          .catch(this.handleError);
  }

  handleError(err: any){
    return Observable.throw(err.message || err)
  }
}
