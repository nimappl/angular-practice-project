import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../../../shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipeItem') recipe: Recipe;
  @Output() onSelect = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.onSelect.emit();
  }

}
