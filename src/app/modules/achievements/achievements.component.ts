import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AchievementsApiService} from '../../services/api/achievements-api.service';
import {Account, CategoryGroup, Category, AccountAchievement} from '../../shared/achievements.model';
import {Subscription} from 'rxjs';
import {DataService} from '../../services/data/data.service';
import {Observable} from 'rxjs/Observable';

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
  lastOpenedCategory: Category;
  accountAchievements: AccountAchievement[];
  loadingAchievementData: Subscription;
  isAchievementDataLoaded: boolean;
  isSearching: boolean;
  dataServiceIsAuthorizedSubscription: Subscription;
  searchingObservable: Observable<any>;

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
      categoryGroups => this.categoryGroups = categoryGroups,
      () => {},
      () => {
        this.currentlyOpenedCategory = this.categoryGroups[0].categories[0];
        this.achievementsApiService.getAccountAchievements(localStorage.getItem('api_key')).subscribe(
          accountAchievements => this.accountAchievements = accountAchievements,
          () => {},
          () => this.isAchievementDataLoaded = true
        );
        return console.log(this.currentlyOpenedCategory);
      }
    );
  }

  showAchievementsFromCategory(category: Category) {
    this.currentlyOpenedCategory = category;
    this.isSearching = false;
    console.log(this.currentlyOpenedCategory);
  }
  onSearch(eventData: any) {
    if (eventData.isSearching && this.currentlyOpenedCategory) {
      this.lastOpenedCategory = this.currentlyOpenedCategory;
      this.currentlyOpenedCategory = null;
    } else if (!eventData.isSearching) {
      this.currentlyOpenedCategory = this.lastOpenedCategory;
    }
    this.isSearching = eventData.isSearching;
    this.searchingObservable = eventData.searchingObservable;
  }
}
