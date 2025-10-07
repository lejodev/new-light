import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './modules/homepage/components/homepage/homepage.component';
import { ShoppingcartComponent } from './modules/shoppingcart/components/shoppingcart/shoppingcart.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsListComponent } from './modules/products/components/products-list/products-list.component';
import { ProductSingleComponent } from './modules/products/components/product-single/product-single.component';
import { SharedModule } from './shared/shared.module';
import { HomepageModule } from './modules/homepage/homepage.module';
import { ProductsModule } from './modules/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartComponent,
    // ProductsListComponent,
    // ProductSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule,
    BrowserAnimationsModule,
    SharedModule,
    HomepageModule,
    // ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
