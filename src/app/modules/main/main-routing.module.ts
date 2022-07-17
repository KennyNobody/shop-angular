import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {Routes, RouterModule} from "@angular/router";
import {RoutePath} from "../../common/enums/route-path.enum";

const routes: Routes = [
  {
    path: RoutePath.EMPTY,
    component: MainComponent,
    // loadChildren: () => import('../main/main.module').then(m => m.MainModule)
    children: [
      {
        path: RoutePath.CATALOG,
        loadChildren: () => import('./components/page-catalog/page-catalog.module').then(m => m.PageCatalogModule)
      },
      {
        path: RoutePath.CART,
        loadChildren: () => import('./components/page-cart/page-cart.module').then(m => m.PageCartModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}
