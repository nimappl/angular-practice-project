import { Ingredient } from '../../shared/ingredient.model';

import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(name: string, amount: number): void {
    this.ingredients.push({name, amount});
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
