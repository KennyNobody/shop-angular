import { Component } from '@angular/core';
import {DataBaseService} from "../../../../common/services/data-base.service";
import {CatalogService} from "../../../../common/services/catalog.service";
// import {SomeServiceService} from "../../../../common/services/some-service.service";

@Component({
  selector: 'app-page-catalog',
  templateUrl: './page-catalog.component.html',
  styleUrls: ['./page-catalog.component.scss']
})
export class PageCatalogComponent {
  constructor(
    private dataBaseService: DataBaseService,
    catalogService: CatalogService
    // private someService: SomeServiceService
  ) {
    console.log('1');
    dataBaseService.fetchData();

    // console.log(this.someService.data);
    // this.productService.getProducts();
  }
}

