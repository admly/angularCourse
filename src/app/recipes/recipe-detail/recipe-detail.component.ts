import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../model/recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping/shopping-list/shopping-list.service';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  receivedRecipe: Recipe;
  constructor(private shoppingListService: ShoppingListService,
              private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {this.receivedRecipe = this.recipeService.getRecipesById(+params.id); }
    );
  }

  sendIngredientsToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(x => this.shoppingListService.onIngredientAdded(x));
  }
}
