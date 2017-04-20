import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {AchievementsApiService} from './services/api/achievements-api.service';
import {UserModule} from './modules/user/user.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.router';
import {DataService} from './services/data/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    UserModule
  ],
  providers: [
    AchievementsApiService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
