import {Recipe} from './model/recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  private _recipes = [
    {
      id: 0,
      name: 'test1',
      description: 'test1',
      imagePath: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',
      ingredients: [{name: 'test1', amount: 1} as Ingredient, {name: 'test2', amount: 1} as Ingredient],
    } as Recipe,
    {
      id: 1,
      name: 'test',
      description: 'test',
      imagePath: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg',
      ingredients: [{name: 'test1', amount: 1} as Ingredient, {name: 'test', amount: 1} as Ingredient]
    } as Recipe,
  ];

  get getRecipes(): Recipe[] {
    return this._recipes.slice();
  }

  set setRecipes(value: Recipe[]) {
    this._recipes = value;
  }

  getRecipesById(id: number): Recipe {
    return this._recipes.filter(x => x.id === id)[0];
  }
}
