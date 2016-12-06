import { Component, OnInit } from '@angular/core';
import {AchievementsApiService} from "../../shared/achievements-api.service";
import {Account, CategoryGroup, Category, AccountAchievement} from "../../shared/achievements.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-ahievements',
  templateUrl: './ahievements.component.html',
  styleUrls: ['./ahievements.component.scss', './../../../../node_modules/angular2-busy/build/style/busy.css']
})
export class AhievementsComponent implements OnInit {

  isAuthorized: boolean;
  account: Account;
  achievementsApiService: AchievementsApiService;
  error: any;
  categoryGroups: CategoryGroup[];
  currentlyOpenedCategory: Category;
  accountAchievements: AccountAchievement[];
  loadingAccount: Subscription;
  loadingAchievementData: Subscription;
  isAccountLoaded: boolean;
  isAchievementDataLoaded: boolean;

  constructor(achievementsApiService: AchievementsApiService) {
    this.isAuthorized = false;
    this.achievementsApiService = achievementsApiService;
    this.isAchievementDataLoaded = false;
    this.isAccountLoaded = false;
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
    this.isAchievementDataLoaded = false;
    this.isAccountLoaded = false;
  }

  onGreeting(){
    this.loadingAccount = this.achievementsApiService.getAccount(localStorage.getItem('api_key')).subscribe(
      res => this.account = res,
      ()=> {},
      ()=> this.isAccountLoaded = true
    );
  }

  onLoadData(){
    this.loadingAchievementData = this.achievementsApiService.getAchievements().subscribe(
      res => this.categoryGroups = res,
      ()=>{},
      ()=> {
        this.currentlyOpenedCategory = this.categoryGroups[0].categories[0];
        this.achievementsApiService.getAccountAchievements(localStorage.getItem('api_key')).subscribe(
          res => this.accountAchievements = res,
          ()=> {},
          ()=> this.isAchievementDataLoaded = true
        );
        return console.log(this.currentlyOpenedCategory);}
    );
  }

  showAchievementsFromCategory(category: Category){
    this.currentlyOpenedCategory = category;
    console.log(this.currentlyOpenedCategory);
  }
}
