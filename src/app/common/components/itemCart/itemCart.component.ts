import {Input, Component, OnInit} from "@angular/core";
import {DataBaseService} from "../../services/data-base.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-item-cart',
  templateUrl: './itemCart.component.html',
  styleUrls: ['./itemCart.component.scss']
})

export class ItemCartComponent implements OnInit {
  @Input() id: number = 0;
  title: string = '';
  price: number = 0;
  preview: string = '';
  year: number = 0;
  quantity: number = 0;
  description: string = '';

  constructor(
    public db: DataBaseService,
    public cart: CartService
  ) {}

  ngOnInit() {
    // const data = this.db.getItemById(this.id);
    //
    // this.title = data.title;
    // this.description = data.description;
    // this.price = data.price;
    // this.preview = data.preview;
    // this.year = data.year;
    // this.quantity = data.quantity;
  }

  addToCart = () => {
    // this.cart.setItem(this.id, 1);
  }
}
