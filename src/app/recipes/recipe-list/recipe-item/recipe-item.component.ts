import {Component,  Input, OnInit} from '@angular/core';
import {Recipe} from '../../model/recipe.model';
import {RecipeService} from '../../recipe.service';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe(() => )
  }

  emitRecipeName(name: Recipe) {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }
}
