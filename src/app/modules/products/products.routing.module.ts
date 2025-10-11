import { Routes } from "@angular/router";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ProductSingleComponent } from "./components/product-single/product-single.component";

export const routes: Routes = [
    {
        path: '',
        component: ProductsListComponent
    },
    {
        path: 'product/:id',
        component: ProductSingleComponent
    }
]