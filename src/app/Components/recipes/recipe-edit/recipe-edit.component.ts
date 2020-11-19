import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from 'src/app/shared/recipe.model';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  editForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeSrv: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.editMode = params.id !== undefined;
      this.id = +params.id;
      this.initForm();
    });
  }

  initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeSrv.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          }));
        }
      }
    }

    this.editForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      ingredients: recipeIngredients
    });
  }

  onSubmit() {
    if (this.editMode) {
      // this.recipeSrv.updateRecipe(this.id, new Recipe(
      //   this.editForm.value.name,
      //   this.editForm.value.description,
      //   this.editForm.value.imagePath,
      //   this.editForm.value.ingredients
      // ));
      this.recipeSrv.updateRecipe(this.id, this.editForm.value);
    } else {
      this.recipeSrv.addRecipe(this.editForm.value)
    }
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddIngredient() {
    (this.editForm.get('ingredients') as FormArray).push(new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    }));
  }

  onDeleteIngredient(index: number) {
    (this.editForm.get('ingredients') as FormArray).removeAt(index);
  }

  get controls() { // a getter!
    return (this.editForm.get('ingredients') as FormArray).controls;
  }
}
