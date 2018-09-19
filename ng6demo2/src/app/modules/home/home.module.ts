import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeService } from './home.service';

const homeRoute:Routes = [{
  path:'', component:HomeComponent
}]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),
  ],
  declarations: [HomeComponent],
  providers:[HomeService]
})
export class HomeModule { }
