import {Recipe} from '../../shared/recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected =  new EventEmitter<Recipe>();

  private   recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A Test recipe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg'),
    new Recipe('Turkey ragu', 'Like a healthier spaghetti bolognese, this low-calorie, low-fat and high-protein ragu ...', 'https://images.immediate.co.uk/production/volatile/sites/2/2020/04/OLI-0420-Healthy-TurkeyRagu_04204_preview-02cc7b0.jpg?webp=true&quality=90&resize=620%2C413'),
    new Recipe('Low calorie lasagne', 'If you love a rich, creamy lasagne but are trying to watch your weight, this ...', 'https://images.immediate.co.uk/production/volatile/sites/2/2015/04/5010.jpg?webp=true&quality=90&resize=620%2C413')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
