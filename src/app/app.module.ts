import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SignInFormComponent } from './components/ahievements/sign-in-form/sign-in-form.component';
import { AhievementsComponent } from './components/ahievements/ahievements.component';
import { GreetingUserComponent } from './components/ahievements/greeting-user/greeting-user.component';
import {AchievementsApiService} from "./shared/achievements-api.service";

@NgModule({
  declarations: [
    AppComponent,
    SignInFormComponent,
    AhievementsComponent,
    GreetingUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AchievementsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
