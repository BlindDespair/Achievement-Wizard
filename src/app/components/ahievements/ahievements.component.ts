import { Component, OnInit } from '@angular/core';
import {AchievementsApiService} from "../../shared/achievements-api.service";
import {Account, CategoryGroup} from "../../shared/achievements.model";

@Component({
  selector: 'app-ahievements',
  templateUrl: './ahievements.component.html',
  styleUrls: ['./ahievements.component.scss']
})
export class AhievementsComponent implements OnInit {

  isAuthorized: boolean;
  account: Account;
  achievementsApiService: AchievementsApiService;
  error: any;
  categoryGroups: CategoryGroup[];

  constructor(achievementsApiService: AchievementsApiService) {
    this.isAuthorized = false;
    this.achievementsApiService = achievementsApiService;
  }

  ngOnInit() {
    if(localStorage.getItem('api_key')){
      this.isAuthorized = true;
    }
  }

  onAutorized(apiKey: string){
    this.error = undefined;
    this.achievementsApiService.getAccount(apiKey).subscribe(
      () => {},
      err => {this.error = err; return console.log(this.error);},
      () => {
        this.isAuthorized = true;
        localStorage.setItem('api_key', apiKey);
        return console.log('done');
      });
  }

  onLogout(){
    localStorage.removeItem('api_key');
    this.isAuthorized = false;
  }

  onGreeting(){
    this.achievementsApiService.getAccount(localStorage.getItem('api_key')).subscribe(res => this.account = res);
  }

  onLoadData(){
    this.achievementsApiService.getAchievements().subscribe(res => this.categoryGroups = res);
  }
}
