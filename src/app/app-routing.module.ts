import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RoutePath} from "./common/enums/route-path.enum";

const routes: Routes = [
  {
    path: RoutePath.EMPTY,
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
