import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AppRoutingModule } from "src/app/app-routing.module";



@NgModule({
  declarations: [
    HomepageComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    SharedModule,
    // AppRoutingModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule { }
