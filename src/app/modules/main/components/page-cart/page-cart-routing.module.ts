import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RoutePath} from "../../../../common/enums/route-path.enum";
import {PageCartComponent} from "./page-cart.component";


const routes: Routes = [
  {
    path: RoutePath.EMPTY,
    component: PageCartComponent
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
export class PageCartRoutingModule {
}
