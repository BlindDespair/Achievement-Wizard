import {Component, OnInit} from '@angular/core';
import {AchievementsApiService} from './shared/achievements-api.service';
import {Account} from './shared/achievements.model';

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

  constructor(private  achievementsApiService: AchievementsApiService) {
    this.isAuthorized = false;
  }
  ngOnInit() {
    if (localStorage.getItem('api_key')) {
      this.isAuthorized = true;
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
        return console.log('done');
      });
  }
  onLogout() {
    localStorage.removeItem('api_key');
    this.isAuthorized = false;
  }

  onGreeting() {
    this.achievementsApiService.getAccount(localStorage.getItem('api_key')).subscribe(
      res => this.account = res,
      () => {},
      () => {}
    );
  }
}
