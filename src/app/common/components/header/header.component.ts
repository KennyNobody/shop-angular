import {Component, Input} from "@angular/core";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Input('matBadge') count: number = 0;
  title: string = 'LegoStore'

  constructor(public cart: CartService) {
  }
}
