import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { RecipeListComponent } from './Components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Components/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { RecipeDetailComponent } from './Components/recipes/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './Components/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './Components/shopping-list/shopping-list.service';
import { RecipeService } from './Components/recipes/recipe.service';
import { RecipesResolverService } from './Components/recipes/recipes-resolver.service';
import { RecipeEditComponent } from './Components/recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService]
      },
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ShoppingListService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
