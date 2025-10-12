import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './layout/components/base/base.component';
import { HomepageComponent } from './modules/homepage/components/homepage/homepage.component';
import { ProductSingleComponent } from './modules/products/components/product-single/product-single.component';
import { ShoppingcartComponent } from './modules/shoppingcart/components/shoppingcart/shoppingcart.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: '', component: HomepageComponent },
      {
        path: 'store',
        loadChildren: () => import('./modules/products/products.module').then(products => products.ProductsModule)
      },
      {
        path: 'cart',
        component: ShoppingcartComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
