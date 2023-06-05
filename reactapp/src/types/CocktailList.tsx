import { checkForNullJson } from "../backend/jsonhelpers";
import { IApiTypeProps } from "../interfaces/IApiTypeProps";
import { Cocktail } from "./Cocktail";

export class CocktailList {
  cocktails: Cocktail[] = [];

  constructor(props: IApiTypeProps) {
    if (!checkForNullJson(props.json)) {
      return;
    }

    var jsonObject = JSON.parse(props.json);
    try {
      for (let index = 0; index < jsonObject.drinks.length; index++) {
        this.cocktails.push(
          new Cocktail({ json: JSON.stringify(jsonObject.drinks[index]) })
        );
      }
    } catch (e) {
      console.error(e);
      console.error(
        "Couldn't parse at least one JSON key! Could not parse Cocktail."
      );
      return;
    }
  }
}
