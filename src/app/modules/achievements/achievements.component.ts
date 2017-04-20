import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AchievementsApiService} from '../../services/api/achievements-api.service';
import {Account, CategoryGroup, Category, AccountAchievement} from '../../shared/achievements.model';
import {Subscription} from 'rxjs';
import {DataService} from '../../services/data/data.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss', './../../../../node_modules/angular2-busy/build/style/busy.css']
})
export class AchievementsComponent implements OnInit, OnDestroy {

  @Input() isAuthorized: boolean;
  account: Account;
  categoryGroups: CategoryGroup[];
  currentlyOpenedCategory: Category;
  accountAchievements: AccountAchievement[];
  loadingAchievementData: Subscription;
  isAchievementDataLoaded: boolean;
  dataServiceIsAuthorizedSubscription: Subscription;

  constructor(private achievementsApiService: AchievementsApiService, private dataService: DataService) {
    this.isAchievementDataLoaded = false;
  }

  ngOnInit() {
    this.dataServiceIsAuthorizedSubscription = this.dataService.isAuthorized$
      .subscribe(isAuthorized => {
        this.isAuthorized = isAuthorized;
        return(console.log(this.isAuthorized));
      });
  }
  ngOnDestroy() {
    this.dataServiceIsAuthorizedSubscription.unsubscribe();
  }

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
