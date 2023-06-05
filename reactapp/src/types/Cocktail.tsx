import React from "react";
import { IApiTypeProps } from "../interfaces/IApiTypeProps";
import { checkForNullJson } from "../backend/jsonhelpers";
import { CocktailInstruction } from "./CocktailInstruction";
import { ICocktail } from "../interfaces/ICocktail";

export class Cocktail
  extends React.Component<IApiTypeProps>
  implements ICocktail
{
  id: number = NaN;
  name: string = "";
  drinkAlternate: string = "";
  tags: string[] = [];
  videoLink: string = "";
  category: string = "";
  iba: string = "";
  isAlcoholic: boolean = false;
  glass: string = "";
  instructions: string = "";
  instructionsSpanish: string = "";
  instructionsGerman: string = "";
  instructionsFrench: string = "";
  instructionsItalian: string = "";
  instructionsChineseSimplified: string = "";
  instructionsChineseTraditional: string = "";
  thumbnailLink: string = "";
  cocktailInstructions: CocktailInstruction[] = []; // measure + ingredient 15
  imageSource: string = "";
  imageAttribution: string = "";
  isCreativeCommonsConfirmed: boolean = false;
  dateModified: Date = new Date();

  constructor(props: IApiTypeProps) {
    super(props);

    if (!checkForNullJson(props.json)) {
      console.error("JSON is null! Could not parse cocktail.");
      return;
    }

    var jsonObject = JSON.parse(props.json);
    try {
      this.id = +jsonObject["idDrink"];
      this.name = jsonObject["strDrink"];
      this.drinkAlternate = jsonObject["strDrinkAlternate"];
      this.tags = jsonObject["strTags"]?.split(",");
      this.videoLink = jsonObject["strVideo"];
      this.category = jsonObject["strCategory"];
      this.iba = jsonObject["strIBA"];
      this.glass = jsonObject["strGlass"];
      this.instructions = jsonObject["strInstructions"];
      this.instructionsSpanish = jsonObject["strInstructionsES"];
      this.instructionsGerman = jsonObject["strInstructionsDE"];
      this.instructionsFrench = jsonObject["strInstructionsFR"];
      this.instructionsItalian = jsonObject["strInstructionsIT"];
      this.instructionsChineseSimplified = jsonObject["strInstructionsZH-HANS"];
      this.instructionsChineseTraditional =
        jsonObject["strInstructionsZH-HANT"];
      this.thumbnailLink = jsonObject["strDrinkThumb"];
      this.imageSource = jsonObject["strImageSource"];
      this.imageAttribution = jsonObject["strImageAttribution"];
      this.isCreativeCommonsConfirmed =
        jsonObject["strCreativeCommonsConfirmed"] === "Yes";
      this.dateModified = new Date(jsonObject["dateModified"]);

      if (String(jsonObject["strAlcoholic"]).toLowerCase() === "alcoholic") {
        this.isAlcoholic = true;
      }

      for (var i = 1; i <= 15; i++) {
        var measure = jsonObject[`strMeasure${i}`];
        var ingredient = jsonObject[`strIngredient${i}`];
        if (measure !== null && ingredient !== null) {
          this.cocktailInstructions.push(
            new CocktailInstruction({
              measure: measure,
              ingredient: ingredient,
            })
          );
        }
      }
    } catch (e) {
      console.error(
        `Couldn't parse at least one JSON key! Could not parse cocktail due to error ${e}.`
      );
    }

    return this;
  }
}
