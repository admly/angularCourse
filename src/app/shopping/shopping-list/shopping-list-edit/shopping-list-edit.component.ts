import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;


  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddItem() {
    this.shoppingListService.onIngredientAdded({
      name: this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value
    });
  }

}
