import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from "rxjs";
import {Product} from "../models/item";
import {TaxonomyItemModel} from "../models/taxonomyItem";
import {DataBaseService} from "./data-base.service";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  originalProducts$: Subject<Product[]> = this.dataBaseService.products$;
  series$: Subject<TaxonomyItemModel[]> = this.dataBaseService.series$;
  tags$: Subject<TaxonomyItemModel[]> = this.dataBaseService.tags$;
  // products$: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  products$: any = new BehaviorSubject([]);

  constructor(private dataBaseService: DataBaseService) {
    this.dataBaseService.products$.subscribe((products :Product[]) => {
      this.products$.next(products);
    });
  }
}
