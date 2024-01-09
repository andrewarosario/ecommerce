import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  productQuantity$ = this.cartSubject.pipe(map((products) => products.length));

  addToCart(product: Product): void {
    const cart = this.cartSubject.getValue();
    this.cartSubject.next([...cart, product]);
  }
}
