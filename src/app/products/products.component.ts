import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[]= [];
  
  constructor(private productsService: ProductsService){}
  
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productsService.getAllProducts().subscribe(data =>{
      this.products = data;
    })
  }



  // Method to edit a product
editProduct(product: Product): void {
  // Implement your edit logic here
  // This could involve navigating to an edit page or opening an edit form modal
  console.log('Edit product:', product);
}

// Method to delete a product
deleteProduct(productId: Number): void {
  // Implement your delete logic here
  // This could involve making a DELETE request to your API
  console.log('Delete product ID:', productId);
}



}
