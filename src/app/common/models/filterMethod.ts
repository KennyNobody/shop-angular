import {TaxonomyItemModel} from "./taxonomyItem";
import {FilterYears} from "../enums/filterYears";
import {InputRange} from "./inputRange";
import {RecommendedAge} from "../enums/recommendedAge";

export interface FilterMethod {
  age: RecommendedAge;
  minifigures: number;
  quantity: number;
  years: FilterYears;
  parts: InputRange;
  price: InputRange;
  tags: TaxonomyItemModel[];
  series: TaxonomyItemModel;
}
