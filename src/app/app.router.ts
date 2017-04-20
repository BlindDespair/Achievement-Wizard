import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  { path: 'achievements', loadChildren: './modules/achievements/achievements.module#AchievementsModule' },
  { path: 'about', loadChildren: './modules/about/about.module#AboutModule' }
];
