import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const newIngredient = { name: this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value } as Ingredient;
    this.ingredientAdded.emit(newIngredient);
  }

}
