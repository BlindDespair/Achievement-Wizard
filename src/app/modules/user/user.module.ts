import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from './user.component';
import {SignInFormComponent} from './sign-in-form/sign-in-form.component';
import {GreetingUserComponent} from './greeting-user/greeting-user.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    UserComponent,
    SignInFormComponent,
    GreetingUserComponent
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
