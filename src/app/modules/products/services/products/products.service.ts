import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { productMock } from '../../mocks/products.mock';
import { HttpService } from 'src/app/core/services/http/http.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsList: Product[] = []

  constructor(private httpService: HttpService) { }

  // setProducts(): void {
  //   this.httpService.get('products/details').subscribe({
  //     next: (res => {
  //       Array.isArray(res) ? res : [res];
  //     })
  //   })
  // }

  getProductsList(): void {
    this.getProducts().pipe(tap(res => {
      console.log('res in pipe', res)
    }))
  }

  getProducts(): Observable<Product[] | Product> {
    return this.httpService.get('products/')
  }

  getSingleProduct(productId: string): Observable<Product | Product[]> {
    return this.httpService.get(`products/${productId}`)
  }
}
