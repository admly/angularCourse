import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RecipesComponent} from '../recipes/recipes.component';
import {ShoppingListComponent} from '../shopping/shopping-list/shopping-list.component';
import {RecipeItemComponent} from '../recipes/recipe-list/recipe-item/recipe-item.component';

const appRoutes = [
  {
    path: '', redirectTo: '/recipes', pathMatch: 'full'
  },
  {
    path: 'recipes', component: RecipesComponent,
    // children: [
    //   {
    //     path: ':id', component: RecipeItemComponent
    //   }
    // ]
  },
  {
    path: 'shopping-list', component: ShoppingListComponent
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule {
}
