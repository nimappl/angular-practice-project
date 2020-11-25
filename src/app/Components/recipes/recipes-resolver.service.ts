import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';

import { Recipe } from '../../shared/recipe.model';
import { DataStorageService } from '../../shared/data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {

  constructor(private dataStorageSrv: DataStorageService,
              private recipesSrv: RecipeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesSrv.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageSrv.fetchRecipes();
    } else {
      return recipes;
    }
  }
}