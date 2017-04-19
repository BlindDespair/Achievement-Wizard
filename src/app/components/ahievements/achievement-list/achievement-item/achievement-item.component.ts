import {Component, OnInit, Input} from '@angular/core';
import {Achievement, AccountAchievement, Tier} from '../../../../shared/achievements.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-achievement-item',
  templateUrl: 'achievement-item.component.html',
  styleUrls: ['achievement-item.component.scss']
})
export class AchievementItemComponent implements OnInit {

  @Input() achievement: Achievement;
  @Input() accountAchievements: AccountAchievement[];
  accountAchievement: AccountAchievement;
  currentTier: Tier;
  accountAchievementCount: number;

  constructor() {}

  ngOnInit() {
    Observable.from(this.accountAchievements)
      .filter(res => res.id === this.achievement.id)
      .subscribe(
        res => {
          this.accountAchievement = res;
          this.accountAchievementCount = res.current;
          return console.log(this.accountAchievement);
        },
        () => {},
        () => {
          if (this.accountAchievement === undefined) {
            this.accountAchievementCount = 0;
          }
          return Observable.from(this.achievement.tiers)
            .filter(res => this.accountAchievementCount < res.count || this.accountAchievementCount >= res.count && res === this.achievement.tiers[this.achievement.tiers.length - 1])
            .take(1)
            .subscribe(
              res => this.currentTier = res,
              () => {},
              () => {
                if (this.accountAchievementCount > this.currentTier.count) {
                  this.accountAchievementCount = this.currentTier.count;
                }
                return console.log(this.currentTier, this.accountAchievementCount);
              }
            );
        });
  }

}
