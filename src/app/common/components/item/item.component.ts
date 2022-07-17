import {Input, Component, OnInit} from "@angular/core";
import {DataBaseService} from "../../services/data-base.service";
import {CartService} from "../../services/cart.service";
import {FormControl} from "@angular/forms";
import {Product} from "../../models/item";
import {ItemPreview} from "../../types/ItemPreviewType";
import {RecommendedAge} from "../../enums/recommendedAge";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {
  @Input() id: number = 0;
  @Input() title: string = 'Загрузка...';
  @Input() price: number = 0;
  @Input() preview: string = '';
  @Input() year: number = 0;
  @Input() quantity: number = 0;
  @Input() description: string = 'Загрузка...';

  constructor(
    public db: DataBaseService,
    public cart: CartService
  ) {
  }

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
    console.log('Добавляем в корзину ' + this.id);
    // this.cart.setItem(this.id, 1);
  }
}
