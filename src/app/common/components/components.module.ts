import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ItemComponent} from "./item/item.component";
import {ItemsComponent} from "./items/items.component";
import {FilterComponent} from "./filter/filter.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {ItemCartComponent} from "./itemCart/itemCart.component";

import {RouterModule} from "@angular/router";
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import { MatToolbarModule } from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    FilterComponent,
    FooterComponent,
    HeaderComponent,
    ItemComponent,
    ItemCartComponent,
    ItemsComponent,
    ToolbarComponent,
  ],
  exports: [
    FilterComponent,
    FooterComponent,
    HeaderComponent,
    ItemComponent,
    ItemCartComponent,
    ItemsComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatBadgeModule,
    MatToolbarModule,
    RouterModule
  ]
})
export class ComponentsModule { }
