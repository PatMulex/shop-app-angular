import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, interval, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];

  private urlApi: string = environment.serverUlr;

  constructor(private http: HttpClient) { }

 /* getProducts(): Promise<Product[]>{
    return new Promise((resolve, reject)=>{
      if(this.products.length){
        resolve(this.products)
      }
      else{
        reject([])
      }
    })
  } */

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.urlApi);
  }

  getNumber(): Observable<Number>{
    return of(60);
  }

  getSecond(): Observable<number>{
    return interval(1000);
  }

  addProduct(product: Product){
    return product;
  }

  editProduct(idproduct: string, newProduct: Product){

  }
  deleteProduct(idProduct: string){

  }
}
