import {Component, Input, OnInit} from '@angular/core';
import {Achievement, Tier} from '../,,/../../../../../shared/achievements.model';

@Component({
  selector: 'app-achievement-details',
  templateUrl: './achievement-details.component.html',
  styleUrls: ['./achievement-details.component.scss']
})
export class AchievementDetailsComponent implements OnInit {
  @Input() achievement: Achievement;
  @Input() accountAchievementCount: number;
  @Input() currentTier: Tier;
  constructor() { }

  ngOnInit() {
  }

}
