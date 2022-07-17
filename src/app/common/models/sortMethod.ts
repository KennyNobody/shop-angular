import {CatalogOrder} from "../enums/catalogOrder";
import {CatalogView} from "../enums/catalogView";

export interface sortMethod {
  order: CatalogOrder,
  view: CatalogView
}
