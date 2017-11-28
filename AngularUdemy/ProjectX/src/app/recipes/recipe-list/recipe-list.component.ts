import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/6/64/Home_made_Indian_Panipuri.jpg'),
        new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://static.pexels.com/photos/221143/pexels-photo-221143.jpeg')
    ];

    constructor() { }

    ngOnInit() {
  }

}
