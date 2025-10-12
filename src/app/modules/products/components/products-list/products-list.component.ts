import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../interfaces/product.interface';
import { Subscriber } from 'rxjs';
import { SearchService } from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = []
  searchTerm!: string;

  constructor(
    private productsService: ProductsService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    // this.productsService.setProducts()
    this.productsService.getProducts().subscribe({
      next:
        (data: Product[] | Product) => {
          //I'm ensuring data is always an array
          const productsArray = Array.isArray(data) ? data : [data]
          this.products = productsArray
          this.filteredProducts = [...this.products]

          this.searchService.currentSearchTerm.subscribe(term => {
            this.searchTerm = term
            this.filterProducts(this.searchTerm)
          });

        }, error: (err) => {
          console.log(err);

        }
    })
  }

  filterProducts(searchTerm: string): void {
    const term = searchTerm.toLocaleLowerCase();
    this.filteredProducts = this.products.filter(product => product.name.toLocaleLowerCase().includes(term) || product.description?.toLocaleLowerCase().includes(term))
    console.log(this.filteredProducts);
  }

}
