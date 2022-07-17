import {TaxonomyItemModel} from './taxonomyItem';
import {Product} from "./item";

export interface ResponseModel {
  title: string;
  series: TaxonomyItemModel,
  tags: TaxonomyItemModel[],
  items: Product[],
}
