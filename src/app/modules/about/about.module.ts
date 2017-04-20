import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from './about.component';
import {RouterModule} from '@angular/router';
import {aboutRoutes} from './about.router';

@NgModule({
  imports: [
    RouterModule.forChild(aboutRoutes),
    CommonModule
  ],
  declarations: [
    AboutComponent
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
