import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { productMock } from '../../mocks/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsList: Product[] = []

  constructor() { }

  setProducts(): void {
    this.productsList = productMock
  }

  getProducts(): Product[] {
    return this.productsList;
  }
}
