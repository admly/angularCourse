import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Ingredient} from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription =
      this.shoppingListService.startedEditing.subscribe(
        (index: number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.shoppingListForm.setValue({name: this.editedItem.name, amount: this.editedItem.amount});
        }
      );
  }

  onAddItem(f: NgForm) {
    const value = f.value;
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, {name: value.name, amount: value.amount});
    } else {
      this.shoppingListService.onIngredientAdded({name: value.name, amount: value.amount});
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
