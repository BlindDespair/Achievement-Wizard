import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {Account, CategoryGroup, AccountAchievement} from './achievements.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {environment} from '../../environments/environment';

@Injectable()
export class AchievementsApiService {
  private gw2ApiHost: string;
  private gw2EfApiHost: string;

  constructor(private http: Http) {
    this.gw2ApiHost = environment.gw2ApiHost;
    this.gw2EfApiHost = environment.gw2EfApiHost;
  }

  getAccount(apiKey: string): Observable<Account> {
    return this.getAccountJson(apiKey);
  }

  handleError(err: any) {
    return Observable.throw(err.message || err);
  }

  getAchievements(): Observable<CategoryGroup[]> {
    return this.getAchievementsJson();
  }

  getAccountAchievements(apiKey: string): Observable<AccountAchievement[]> {
    return this.getAccountAchievementsJson(apiKey);
  }

  private getAchievementsJson(): Observable<CategoryGroup[]> {
    return this.http.get(this.gw2EfApiHost + 'achievements?ids=all')
      .map(res => res.json())
      .do(res => console.log(res))
      .catch(this.handleError);
  }
  private getAccountAchievementsJson(apiKey): Observable<AccountAchievement[]> {
    return this.http.get(this.gw2ApiHost + `account/achievements?access_token=${apiKey}`)
      .map(res => res.json())
      .catch(this.handleError);
  }
  private getAccountJson(apiKey: string): Observable<Account> {
    return this.http.get(this.gw2ApiHost + `account?access_token=${apiKey}`)
      .map(res => res.json())
      .catch(this.handleError);
  }
}
