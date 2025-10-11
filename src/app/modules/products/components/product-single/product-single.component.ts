import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      const route = params.get('id')
      console.log('ROUTE', route);

      if (!route) {
        this.router.navigate(['/store']);
        throw new Error('Pruduct not found')

      }
      this.productsService.getSingleProduct(route).subscribe({
        next: (res) => {
          const data = Array.isArray(res) ? res[0] : res
          console.log('response', res);

          if (data) {
            this.product = data
          } else {
            this.router.navigate(['/store'])
          }
        }
      })

    }
    )

  }

}
