import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from './model/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Input() receivedRecipe;

  constructor() { }

  ngOnInit() {
  }

  receiveRecipeAndSentToRecipeDetail($event: Recipe) {
    this.receivedRecipe = $event;
  }
}
