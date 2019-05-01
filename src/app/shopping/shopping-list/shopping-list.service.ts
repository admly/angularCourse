import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChange = new EventEmitter<Ingredient[]>();
  ingredients = [{name: 'Apples', amount: 1} as Ingredient, {name: 'Sausages', amount: 1} as Ingredient];


  constructor() {
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

}
