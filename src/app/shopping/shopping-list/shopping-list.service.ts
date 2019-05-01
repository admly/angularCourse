import {Injectable} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients = [{name: 'Apples', amount: 1} as Ingredient, {name: 'Sausages', amount: 1} as Ingredient];


  constructor() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
