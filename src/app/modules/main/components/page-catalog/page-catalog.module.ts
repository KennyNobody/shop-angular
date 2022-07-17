import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PageCatalogComponent} from './page-catalog.component';
import {PageRoutingModule} from "./page-routing.module";

import {ComponentsModule} from "../../../../common/components/components.module";


@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    PageCatalogComponent,
  ]
})
export class PageCatalogModule {
}
