import {Component, OnInit} from '@angular/core';
import {AchievementsApiService} from './shared/achievements-api.service';
import {Account} from './shared/achievements.model';
import {DataService} from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']

})
export class AppComponent implements OnInit {
  title = 'Achievement Wizard alpha v0.4';
  error: any;
  isAuthorized: boolean;
  account: Account;

  constructor(private  achievementsApiService: AchievementsApiService, private dataService: DataService) {
    this.isAuthorized = false;
  }
  ngOnInit() {
    if (localStorage.getItem('api_key')) {
      this.isAuthorized = true;
      this.dataService.setIsAuthorized(this.isAuthorized);
    }
  }

  onAutorized(apiKey: string) {
    this.error = undefined;
    this.achievementsApiService.getAccount(apiKey).subscribe(
      () => {},
      err => {
        this.error = err; return console.log(this.error);
      },
      () => {
        this.isAuthorized = true;
        localStorage.setItem('api_key', apiKey);
        this.dataService.setIsAuthorized(this.isAuthorized);
        return console.log('done');
      });
  }
  onLogout() {
    localStorage.removeItem('api_key');
    this.isAuthorized = false;
    this.dataService.setIsAuthorized(this.isAuthorized);
  }

  onGreeting() {
    this.achievementsApiService.getAccount(localStorage.getItem('api_key')).subscribe(
      res => this.account = res,
      () => {},
      () => {}
    );
  }
}
