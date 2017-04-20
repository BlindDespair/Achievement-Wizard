import {Component, OnInit, Input} from '@angular/core';
import {Category, AccountAchievement} from '../../../shared/achievements.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss']
})
export class AchievementListComponent implements OnInit {

  @Input() currentlyOpenedCategory: Category;
  @Input() accountAchievements: AccountAchievement[];

  constructor() { }

  ngOnInit() {
  }

  get sortedAchievements(){
    return this.currentlyOpenedCategory.achievements
      .map(achievement => achievement)
      .sort((a, b) => {
        let currentAchievementCountA = 0;
        let currentAchievementCountB = 0;
        Observable.from(this.accountAchievements)
          .filter(accountAchievement => accountAchievement.id === a.id)
          .subscribe(res => currentAchievementCountA = res.current);
        Observable.from(this.accountAchievements)
          .filter(accountAchievement => accountAchievement.id === b.id)
          .subscribe(res => currentAchievementCountB = res.current);
        if (currentAchievementCountA / a.tiers[a.tiers.length - 1].count > currentAchievementCountB / b.tiers[b.tiers.length - 1].count) return -1;
        else if (currentAchievementCountA / a.tiers[a.tiers.length - 1].count < currentAchievementCountB / b.tiers[b.tiers.length - 1].count) return 1;
        else return 0;
      });
  }

}
