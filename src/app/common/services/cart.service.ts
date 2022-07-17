import {Injectable} from '@angular/core';
import {Product} from "../models/item";
import {DataBaseService} from "./data-base.service";
import {BehaviorSubject, Observable} from 'rxjs';
import { CartItem } from "../models/cartItem";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items$: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  constructor() {
  }

  addToCart(product: Product) {
    // this.localStorageService.delete(LocalStorageKeys.CART_ITEMS);

  }
}

