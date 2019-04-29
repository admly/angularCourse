import {Component,  Input, OnInit} from '@angular/core';
import {Recipe} from '../../model/recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  emitRecipeName(name: Recipe) {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }
}
