import { Component } from '@angular/core';
import {AchievementsApiService} from "./shared/achievements-api.service";
import {AhievementsComponent} from "./components/ahievements/ahievements.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']

})
export class AppComponent {
  title = 'app works!';
}
