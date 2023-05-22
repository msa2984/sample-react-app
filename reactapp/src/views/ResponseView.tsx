import { IResponseProps } from "../interfaces/IResponseProps";
import { ItemType } from "../types/ItemTypeEnum";
import { CocktailCardView } from "./CocktailCardView";
import { IngredientCardView } from "./IngredientCardView";

export function ResponseView(props: IResponseProps) {
  const ingredientList = props.ingredientList;
  const cocktailList = props.cocktailList;
  const itemType = props.itemType;

  return (
    <div>
      {itemType === ItemType.Ingredient && ingredientList && (
        <ul>
          {ingredientList?.map((ingredient) => (
            <IngredientCardView ingredient={ingredient} visible={true} />
          ))}
        </ul>
      )}
      {itemType === ItemType.Cocktail && cocktailList && (
        <ul>
          {cocktailList?.map((cocktail) => (
            <CocktailCardView cocktail={cocktail} visible={true} />
          ))}
        </ul>
      )}
      {itemType === ItemType.Ingredient &&
        ingredientList != null &&
        ingredientList?.length <= 0 && (
          <span>
            Sorry, there are no ingredients matching the provided input. Please
            try again.
          </span>
        )}
      {itemType === ItemType.Cocktail &&
        cocktailList != null &&
        cocktailList?.length <= 0 && (
          <span>
            Sorry, there are no cocktails matching the provided input. Please
            try again.
          </span>
        )}
    </div>
  );
}
