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
  toggledDetails: boolean;

  constructor() {
    this.toggledDetails = false;
  }

  ngOnInit() {
    Observable.from(this.accountAchievements)
      .filter(accountAchievement => accountAchievement.id === this.achievement.id)
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
            .filter(tier => this.accountAchievementCount < tier.count || this.accountAchievementCount >= tier.count && tier === this.achievement.tiers[this.achievement.tiers.length - 1])
            .take(1)
            .subscribe(
              tier => this.currentTier = tier,
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
  toggleDetails() {
    this.toggledDetails = !this.toggledDetails;
  }

}
