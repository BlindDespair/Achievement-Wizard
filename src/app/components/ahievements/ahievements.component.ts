import { Component, OnInit } from '@angular/core';
import {AchievementsApiService} from "../../shared/achievements-api.service";
import {Account} from "../../shared/achievements.model";

@Component({
  selector: 'app-ahievements',
  templateUrl: './ahievements.component.html',
  styleUrls: ['./ahievements.component.scss']
})
export class AhievementsComponent implements OnInit {

  isAuthorized: boolean;
  account: Account;
  achievementsApiService: AchievementsApiService;

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
    if(this.achievementsApiService.autorize(apiKey)){
      this.isAuthorized = true;
    }
  }

  onLogout(){
    this.achievementsApiService.logout();
    this.isAuthorized = false;
  }

  onGreeting(){
    this.achievementsApiService.getAccount(localStorage.getItem('api_key')).subscribe(res => this.account = res);
  }
}
