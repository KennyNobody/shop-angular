import {TaxonomyItemModel} from './taxonomyItem';
import {ItemPreview} from "../types/ItemPreviewType";
import {RecommendedAge} from "../enums/recommendedAge";

export interface Product {
  id: number;                             // id товара
  title: string;                          // название
  price: number;                          // цена
  code: number;                           // заводской артикул
  preview: ItemPreview;                   // превью
  recommendedAge: RecommendedAge;         // рекомендуемый возраст
  year: number;                           // год выхода
  parts: number;                          // количество деталей   // добавлено в корзину или нет
  quantity: number;                   		// количество
  minifigures: number;                    // количество фигурок человечков
  description: string;                    // описание полное
  tags: TaxonomyItemModel[];              // связанные теги
  series: TaxonomyItemModel;              // серия - 'ideas', 'city', etc.
}
