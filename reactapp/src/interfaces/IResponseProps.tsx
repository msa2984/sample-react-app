import { ItemType } from "../types/ItemTypeEnum";
import { ICocktail } from "./ICocktail";
import { IIngredient } from "./IIngredient";

export interface IResponseProps {
  cocktailList: ICocktail[] | null;
  ingredientList: IIngredient[] | null;
  itemType: ItemType;
}
