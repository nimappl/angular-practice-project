import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { ShoppingListService } from '../shopping-list.service';
import {Ingredient} from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) editForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editingItemIndex: number;
  editingItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editingItemIndex = index;
      this.editingItem = this.shoppingListService.getIngredient(index);
      this.editForm.setValue({
        name: this.editingItem.name,
        amount: this.editingItem.amount
      });
    });
  }

  onSubmit(form: NgForm): void {
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode)
      this.shoppingListService.updateIngredient(this.editingItemIndex, newIngredient);
    else
      this.shoppingListService.addIngredients([newIngredient]);
    
    this.resetForm();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editingItemIndex);
    this.resetForm();
  }
  
  resetForm() {
    this.editForm.reset();
    this.editMode = false;
    this.editingItemIndex = null;
    this.editingItem = null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
