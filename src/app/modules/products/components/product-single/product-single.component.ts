import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { productMock } from '../../mocks/products.mock';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {

  product!: Product | undefined;
  products: Product[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {

    this.products = productMock;

    this.activatedRoute.paramMap.subscribe(params => {
      const route = params.get('id')
      console.log('ROUTE', route);
      
      if (!route) {
        throw new Error('Pruduct not found')
      }
      this.product = this.productsService.getSingleProduct(route)
      console.log('product', this.product);

    }
    )

  }

}
