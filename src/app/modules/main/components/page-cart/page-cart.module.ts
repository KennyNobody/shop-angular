import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {PageCartComponent} from './page-cart.component';
import {PageCartRoutingModule} from "./page-cart-routing.module";

@NgModule({
  declarations: [
    PageCartComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    PageCartRoutingModule,
  ]
})
export class PageCartModule {
}
