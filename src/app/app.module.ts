import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {AchievementsApiService} from './shared/achievements-api.service';
import {UserModule} from './components/user/user.module';
import {AchievementsModule} from './components/aсhievements/achievements.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.router';
import {DataService} from './shared/data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    UserModule,
    AchievementsModule
  ],
  providers: [
    AchievementsApiService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
