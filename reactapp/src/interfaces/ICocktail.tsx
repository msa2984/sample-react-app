import { CocktailInstruction } from "../types/CocktailInstruction";
import { IBaseItem } from "./IBaseItem";

export interface ICocktail extends IBaseItem {
  drinkAlternate: string;
  tags: string[];
  videoLink: string;
  category: string;
  iba: string;
  glass: string;
  instructions: string;
  instructionsSpanish: string;
  instructionsGerman: string;
  instructionsFrench: string;
  instructionsItalian: string;
  instructionsChineseSimplified: string;
  instructionsChineseTraditional: string;
  thumbnailLink: string;
  cocktailInstructions: CocktailInstruction[];
  imageSource: string;
  imageAttribution: string;
  isCreativeCommonsConfirmed: boolean;
  dateModified: Date;
}