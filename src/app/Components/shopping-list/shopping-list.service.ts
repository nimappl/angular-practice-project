import { Subject } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  // addIngredient(newIng: Ingredient): void {
  //   this.ingredients.push(newIng);
  //   this.ingredientsChanged.next(this.ingredients.slice());
  // }
  
  updateIngredient(index: number, newValue: Ingredient): void {
    this.ingredients[index] = newValue;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]): void {
    // this.ingredients.push(...ingredients);

    // add smart
    for (const iToAdd of ingredients) {
      let notInList = true;
      for (const iInList of this.ingredients) {
        if (iToAdd.name === iInList.name) {
          iInList.amount += iToAdd.amount;
          notInList = false;
          break;
        }
      }
      if (notInList)
        this.ingredients.push(iToAdd);
    }

    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
