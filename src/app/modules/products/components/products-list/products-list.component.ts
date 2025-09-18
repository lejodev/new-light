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
    this.productsService.setProducts()
    this.products = this.productsService.getProducts()
    this.filteredProducts = [...this.products]
    this.searchService.currentSearchTerm.subscribe(term => {
      console.log('Search term in products list:', term);
      // Here you can implement filtering logic based on the search term

      this.searchTerm = term
      this.filterProducts(this.searchTerm)
    });
  }

  filterProducts(searchTerm: string): void {
    const term = searchTerm.toLocaleLowerCase();
    this.filteredProducts = this.products.filter(product => product.name.toLocaleLowerCase().includes(term) || product.description.toLocaleLowerCase().includes(term))
    console.log(this.filteredProducts);
  }

}
