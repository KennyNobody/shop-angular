import {Component} from "@angular/core";
import {DataBaseService} from "../../services/data-base.service";
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/item";
import {CatalogService} from "../../services/catalog.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent {
  items: Product[] = [];

  constructor(
    public dataBaseService: DataBaseService,
    public cart: CartService,
    public catalogService: CatalogService
    // private r: Router,
  ) {

  }

}
