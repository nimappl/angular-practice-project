import { Subject } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(name: string, amount: number): void {
    this.ingredients.push({name, amount});
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
}
