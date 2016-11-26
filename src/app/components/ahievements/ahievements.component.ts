import { Component, OnInit } from '@angular/core';
import {AchievementsApiService} from "../../shared/achievements-api.service";

@Component({
  selector: 'app-ahievements',
  templateUrl: './ahievements.component.html',
  styleUrls: ['./ahievements.component.scss']
})
export class AhievementsComponent implements OnInit {

  achievementsApiService: AchievementsApiService;

  constructor(achievementsApiService: AchievementsApiService) {
    this.achievementsApiService = achievementsApiService;
  }

  ngOnInit() {

  }

  onAutorized(apiKey: String){
    this.achievementsApiService.autorize(apiKey).subscribe(res => console.log(res.name));
  }

}
