import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './modules/help/help.component';
import { HttpCallService } from './modules/shared/services/http-call.service';
import { HttpClientModule } from '@angular/common/http';


const appRoute:Routes = [
  {path:'main', loadChildren:'./modules/home/home.module#HomeModule'},
  {path:'contact', component:HelpComponent},
  {path:'', redirectTo:'main', pathMatch:'full'}
]

@NgModule({
  imports: [
    BrowserModule,
     RouterModule.forRoot(appRoute),
     HttpClientModule
  ],
  declarations: [
    AppComponent,
    HelpComponent
  ],
  providers: [HttpCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
