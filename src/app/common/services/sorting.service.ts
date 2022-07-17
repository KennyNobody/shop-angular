import {Injectable} from '@angular/core';
import {Product} from "../models/item";
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {ResponseModel} from "../models/response";
import {CatalogService} from "./catalog.service";

@Injectable({
  providedIn: 'root'
})
export class SortingService {
  sortType = '';
  constructor(
    private catalogService: CatalogService
  ) {
  }

  sort(type: string) {
    const arr = this.catalogService.products$.value;

    if (type === 'PRICE_ASC') {
      arr.sort(function compare(a:Product, b: Product) {
          if (a.price < b.price) {
            return 1;
          }
          if (a.price > b.price) {
            return -1;
          }
          return 0;
        }
      );
      this.sortType = type;
    } else if (type === 'PRICE_DESC') {
      arr.sort(function compare(a:Product, b: Product) {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        }
      );
      this.sortType = type;
    } else if (type === 'YEAR_ASC') {
      arr.sort(function compare(a:Product, b: Product) {
          if (a.year < b.year) {
            return -1;
          }
          if (a.year > b.year) {
            return 1;
          }
          return 0;
        }
      );
      this.sortType = type;
    } else if (type === 'YEAR_DES') {
      arr.sort(function compare(a:Product, b: Product) {
          if (a.year < b.year) {
            return 1;
          }
          if (a.year > b.year) {
            return -1;
          }
          return 0;
        }
      );
      this.sortType = type;
    }
    console.log(this.sortType);
    this.catalogService.products$.next(arr);
  }
}

