import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../../common/services/cart.service";
import {DataBaseService} from "../../../../common/services/data-base.service";

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.scss']
})
export class PageCartComponent {
  displayedColumns: string[] = ['name', 'price', 'year', 'quantity'];

  constructor(
    public dataBaseService: DataBaseService,
    public cartService: CartService
  ) {
  }
}
