import {Product} from "./item";
import {CartItem} from "./cartItem";

export interface CartModel {
  items: CartItem;
  fullPrice: number;
}
