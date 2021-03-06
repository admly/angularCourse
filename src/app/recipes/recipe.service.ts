import {Recipe} from './model/recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

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

  getRecipeById(id: number): Recipe {
    return this._recipes.filter(x => x.id === id)[0];
  }

  addRecipe(recipe: Recipe) {
    recipe.id = Math.max.apply(Math, this._recipes.map(o => o.id)) + 1;
    this._recipes.push(recipe);
    this.recipesChanged.next(this._recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    newRecipe.id = index;
    this._recipes[index] = newRecipe;
    this.recipesChanged.next(this._recipes.slice());
  }

  deleteRecipe(index: number){
    this._recipes.splice(index, 1);
    this.recipesChanged.next(this._recipes.slice());
  }
}
