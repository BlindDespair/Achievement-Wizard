import {Component, Input, OnInit} from '@angular/core';
import {AchievementsApiService} from '../../shared/achievements-api.service';
import {Account, CategoryGroup, Category, AccountAchievement} from '../../shared/achievements.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-ahievements',
  templateUrl: './ahievements.component.html',
  styleUrls: ['./ahievements.component.scss', './../../../../node_modules/angular2-busy/build/style/busy.css']
})
export class AhievementsComponent implements OnInit {

  @Input() isAuthorized: boolean;
  account: Account;
  categoryGroups: CategoryGroup[];
  currentlyOpenedCategory: Category;
  accountAchievements: AccountAchievement[];
  loadingAchievementData: Subscription;
  isAchievementDataLoaded: boolean;

  constructor(private achievementsApiService: AchievementsApiService) {
    this.isAchievementDataLoaded = false;
  }

  ngOnInit() {}

  onLoadData() {
    this.loadingAchievementData = this.achievementsApiService.getAchievements().subscribe(
      res => this.categoryGroups = res,
      () => {},
      () => {
        this.currentlyOpenedCategory = this.categoryGroups[0].categories[0];
        this.achievementsApiService.getAccountAchievements(localStorage.getItem('api_key')).subscribe(
          res => this.accountAchievements = res,
          () => {},
          () => this.isAchievementDataLoaded = true
        );
        return console.log(this.currentlyOpenedCategory);
      }
    );
  }

  showAchievementsFromCategory(category: Category) {
    this.currentlyOpenedCategory = category;
    console.log(this.currentlyOpenedCategory);
  }
}
