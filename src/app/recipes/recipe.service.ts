import {Recipe} from './model/recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  private _recipes = [
    {
      name: 'test1',
      description: 'test1',
      imagePath: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'
    } as Recipe,
    {
      name: 'test',
      description: 'test',
      imagePath: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'
    } as Recipe,
  ];

  get getRecipes(): Recipe[] {
    return this._recipes.slice();
  }

  set setRecipes(value: Recipe[]) {
    this._recipes = value;
  }
}
