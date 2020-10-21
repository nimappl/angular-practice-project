import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../../Models/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'A Test recipe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg'),
    new Recipe('Turkey ragu', 'Like a healthier spaghetti bolognese, this low-calorie, low-fat and high-protein ragu comes packed with celery, courgette and carrots, plus a little Marmite for added flavour', 'https://images.immediate.co.uk/production/volatile/sites/2/2020/04/OLI-0420-Healthy-TurkeyRagu_04204_preview-02cc7b0.jpg?webp=true&quality=90&resize=620%2C413'),
    new Recipe('Low calorie lasagne', 'If you love a rich, creamy lasagne but are trying to watch your weight, this healthy, low calorie version will help those cravings. Using lean mince and packing it full of vegetables will help you feel full and fill you with vitamin B. You’d be forgiven for thinking it was the classic!', 'https://images.immediate.co.uk/production/volatile/sites/2/2015/04/5010.jpg?webp=true&quality=90&resize=620%2C413')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
