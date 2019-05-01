import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../model/recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() receivedRecipe: Recipe;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  sendIngredientsToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(x => this.shoppingListService.onIngredientAdded(x));
  }
}
