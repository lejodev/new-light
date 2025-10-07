import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './products.routing.module'
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductSingleComponent } from './components/product-single/product-single.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductSingleComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
