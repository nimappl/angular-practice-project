import { Injectable } from '@angular/core';

import { Recipe } from '../../shared/recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Test Recipe',
      'A Test recipe',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg',
      [
        new Ingredient('Shrimp', 5),
        new Ingredient('Peppers', 2),
        new Ingredient('Olive Oil', 1)
      ]),
    new Recipe(
      2,
      'Turkey ragu',
      'Like a healthier spaghetti bolognese, this low-calorie, low-fat and high-protein ragu ...',
      'https://images.immediate.co.uk/production/volatile/sites/2/2020/04/OLI-0420-Healthy-TurkeyRagu_04204_preview-02cc7b0.jpg?webp=true&quality=90&resize=620%2C413',
      [
        new Ingredient('Pasta', 2),
        new Ingredient('Tomatoes', 1),
        new Ingredient('meat', 1)
      ]),
    new Recipe(
      3,
      'Low calorie lasagne',
      'If you love a rich, creamy lasagne but are trying to watch your weight, this ...',
      'https://images.immediate.co.uk/production/volatile/sites/2/2015/04/5010.jpg?webp=true&quality=90&resize=620%2C413',
      [
        new Ingredient('Pasta', 3),
        new Ingredient('Cheese', 4),
        new Ingredient('Milk', 2)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id - 1];
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
