import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[] = []

  isDisplayModal : boolean = false;
  modalProduct: Product | undefined;

  productSub: Subscription | undefined;

    constructor(private productService: ProductService){

    }

    ngOnInit(): void {
      //this.products = this.productService.getProducts();
     /* this.productService.getProducts()
      .then((products: Product[])=>{
        this.products = products
      })
      .catch(()=>{
        this.products = [];
      })*/

      this.productSub = this.productService.getProducts()
      .subscribe({
        next:(products: Product[])=>{
          this.products = products;
        },
        error:(error: any)=>{
          console.log("Error :", error);
        },
        complete:()=>{
          console.log("Complete");
        }
      })
    }

    handleDeleteProduct(product :Product){
      this.products = this.products.filter(p => p._id !== product._id);
      //console.log(" HandleDeleteProduct : ", product);
    }

    handleDisplayProductViewModal(product : Product){
      console.log("------------");
      console.log(product);
      if(product){
        this.isDisplayModal = true;
        this.modalProduct = product;
      }
    }

    handleCloseProductModalView(isClosed : boolean){
      this.isDisplayModal = false;
      this.modalProduct = undefined;
    }

    ngOnDestroy(): void {
      this.productSub?.unsubscribe();
    }
}
