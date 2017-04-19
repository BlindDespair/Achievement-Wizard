import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SignInFormComponent } from './components/user/sign-in-form/sign-in-form.component';
import { AhievementsComponent } from './components/ahievements/ahievements.component';
import { GreetingUserComponent } from './components/user/greeting-user/greeting-user.component';
import {AchievementsApiService} from './shared/achievements-api.service';
import { CategoryGroupComponent } from './components/ahievements/category-group/category-group.component';
import { CategoryGroupItemComponent } from './components/ahievements/category-group/category-group-item/category-group-item.component';
import { CategoryComponent } from './components/ahievements/category-group/category-group-item/category/category.component';
import { CategoryItemComponent } from './components/ahievements/category-group/category-group-item/category/category-item/category-item.component';
import { AchievementItemComponent } from './components/ahievements/achievement-list/achievement-item/achievement-item.component';
import {AchievementListComponent} from './components/ahievements/achievement-list/achievement-list.component';
import {BusyModule} from 'angular2-busy';
import { AchievementStatsComponent } from './components/ahievements/achievement-stats/achievement-stats.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInFormComponent,
    AhievementsComponent,
    GreetingUserComponent,
    CategoryGroupComponent,
    CategoryGroupItemComponent,
    CategoryComponent,
    CategoryItemComponent,
    AchievementListComponent,
    AchievementItemComponent,
    AchievementStatsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BusyModule
  ],
  providers: [AchievementsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
