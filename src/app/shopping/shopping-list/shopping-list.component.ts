import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients = [];

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = shoppingListService.getIngredients();
  }

  ngOnInit() {
    this.shoppingListService.ingredientsChange.subscribe(x => this.ingredients = x);
  }

}
