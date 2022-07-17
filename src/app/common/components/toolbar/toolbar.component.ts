import {Component} from "@angular/core";
import {FormControl} from "@angular/forms";
import {SortingService} from "../../services/sorting.service";
import {CatalogOrderItem} from "../../models/сatalogOrderItem";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
  view = new FormControl('');
  viewList: string[] = ['Плитка', 'Список'];

  order = new FormControl('');

  orderList: CatalogOrderItem[] = [
    {
      value: 'PRICE_ASC',
      title: 'Цена (выше)'
    },
    {
      value: 'PRICE_DESC',
      title: 'Цена (ниже)'
    },
    {
      value: 'YEAR_ASC',
      title: 'Год выхода (раньше)'
    },
    {
      value: 'YEAR_DES',
      title: 'Год выхода (позже)'
    }
  ]

  constructor(
    public sortingService: SortingService) {
  }

  sort(type: string) {
    this.sortingService.sort(type);
  }
}
