import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../shared-model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients = [{name: 'Apples', amount: 1} as Ingredient, {name: 'Sausages', amount: 1} as Ingredient ];

  constructor() {
  }

  ngOnInit() {
  }

  onIngredientAdded($event: Ingredient) {
    this.ingredients.push($event);
  }
}
