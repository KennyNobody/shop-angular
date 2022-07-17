import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageCatalogComponent} from "./page-catalog.component";
import {RoutePath} from "../../../../common/enums/route-path.enum";

const routes: Routes = [
  {
    path: RoutePath.EMPTY,
    pathMatch: "full",
    component: PageCatalogComponent
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
export class PageRoutingModule {
}
