import {Product} from './item';
import {CatalogOrder} from "../enums/catalogOrder";
import {CatalogView} from "../enums/catalogView";

export interface CatalogModel {
  view: CatalogView;
  order: CatalogOrder;
  items: Product[];
}
