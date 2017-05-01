import { Component, OnInit } 		from '@angular/core';
import { Validators, FormGroup, 
		 FormArray, FormBuilder } 	from '@angular/forms';
import { RecetteService }  			from '../service/recette.service';
import { Router } 					from '@angular/router';

@Component({
    templateUrl: `./app/search/search.component.html`,
	styles: [`
	`]
})

export class SearchComponent implements OnInit {
	public result : any;

	constructor(
		private _fb: FormBuilder, 
		private recetteService: RecetteService, 
		private router: Router){ }
	
    ngOnInit() {
		this.result = null;
    }
	
	searchByName(str:any)
	{
		this.recetteService.search_by_name(str)
		.then(response =>{
			this.result = response;
			console.log("RECEIVED : "  + JSON.stringify(this.result));
		});
	}
	
	searchByRecipe(recipe : any)
	{
		this.recetteService.search_by_recipe(recipe)
		.then(response =>{
			this.result = response;
			console.log("RECEIVED : "  + JSON.stringify(this.result));
		});
	}
	
	goToDetail(recette: any)
	{
		this.router.navigate(['/detail', recette.id]);
	}
}
