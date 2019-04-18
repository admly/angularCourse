import {Component, OnInit} from '@angular/core';
import {Recipe} from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes = [
    {
      name: 'test',
      description: 'test',
      imagePath: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'
    } as Recipe,
    {
      name: 'test',
      description: 'test',
      imagePath: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'
    } as Recipe,
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
