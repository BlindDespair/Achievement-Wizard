import {Component, OnInit, Input} from '@angular/core';
import {Category, AccountAchievement, Achievement} from '../../../shared/achievements.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss']
})
export class AchievementListComponent implements OnInit {

  @Input() currentlyOpenedCategory: Category;
  @Input() accountAchievements: AccountAchievement[];
  @Input() achievements: Achievement[];

  constructor() { }

  ngOnInit() {
  }

  get sortedAchievements(){
    return this.achievements
      .map(achievement => achievement)
      .sort((a, b) => {
        let currentAchievementCountA = 0;
        let currentAchievementCountB = 0;
        Observable.from(this.accountAchievements)
          .filter(accountAchievement => accountAchievement.id === a.id)
          .subscribe(accountAchievement => currentAchievementCountA = accountAchievement.current);
        Observable.from(this.accountAchievements)
          .filter(accountAchievement => accountAchievement.id === b.id)
          .subscribe(accountAchievement => currentAchievementCountB = accountAchievement.current);
        if (currentAchievementCountA / a.tiers[a.tiers.length - 1].count > currentAchievementCountB / b.tiers[b.tiers.length - 1].count) return -1;
        else if (currentAchievementCountA / a.tiers[a.tiers.length - 1].count < currentAchievementCountB / b.tiers[b.tiers.length - 1].count) return 1;
        else return 0;
      });
  }

}
