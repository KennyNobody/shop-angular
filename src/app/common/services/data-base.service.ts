import {Injectable} from '@angular/core';
import {Product} from "../models/item";
import {TaxonomyItemModel} from "../models/taxonomyItem";
import {HttpClient} from "@angular/common/http";
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {ResponseModel} from "../models/response";

interface Response {
  items: Product[],
  tags: TaxonomyItemModel[],
  series: TaxonomyItemModel[]
}

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  products$: Subject<Product[]> = new Subject();
  series$: Subject<TaxonomyItemModel[]> = new Subject();
  tags$: Subject<TaxonomyItemModel[]> = new Subject();
  private url: string = 'https://data.egor-badulin.ru/data.json';

  constructor(private http: HttpClient) {
  }

  fetchData() {
    console.log('2');
    this.http.get<Response>(this.url).subscribe((res: Response) => {
      this.products$.next(res.items);
      this.series$.next(res.series);
      this.tags$.next(res.tags);

      console.log('3');
      console.log(this.products$);
    });
  }
}

