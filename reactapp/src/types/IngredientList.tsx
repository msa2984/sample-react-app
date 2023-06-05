import { checkForNullJson } from "../backend/jsonhelpers";
import { IApiTypeProps } from "../interfaces/IApiTypeProps";
import { Ingredient } from "./Ingredient";

export class IngredientList {
  ingredients: Ingredient[] = [];

  constructor(props: IApiTypeProps) {
    if (!checkForNullJson(props.json)) {
      return ;
    }

    var jsonObject = JSON.parse(props.json)
    try {
      for (let index = 0; index < jsonObject.ingredients.length; index++) {
        this.ingredients.push(new Ingredient({ json: JSON.stringify(jsonObject.ingredients[index])}));
      }
    }
    catch (e) {
      console.error(e);
      console.error("Couldn't parse at least one JSON key! Could not parse ingredient.")
      return;
    }
  }
}