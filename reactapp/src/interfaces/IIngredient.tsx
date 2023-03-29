import { IBaseItem } from "./IBaseItem";

export interface IIngredient extends IBaseItem {
  description: string;
  type: string;
  abv: number
}