import { Component, OnInit } 		from '@angular/core';
import { RecetteService }  			from '../service/recette.service';
import { Router } 					from '@angular/router';

@Component({
    templateUrl: `./app/home/home.component.html`,
})

export class HomeComponent implements OnInit {

	public topRecette  : any;
	public lastRecette : any;
	public arr 		   : any = [];
	public bestRecette : any;
	public arr2 	   : any = [];
	
	
	constructor( 
		private recetteService: RecetteService, 
		private router: Router){ }
	
    ngOnInit() {
		this.recetteService.getLastAddedRecipe().then(response =>{
			this.lastRecette = response.result;

			for(let i = 0; i <= this.lastRecette.length ; ++i) {

				if (this.lastRecette[i].idimage != null)
				{
					console.log("GET IMAGE");
					this.recetteService.get_image(this.lastRecette[i].idimage).then(response => {
						this.arr.push({ url : response.result[0].url, 
										name: this.lastRecette[i].name, 
										email: this.lastRecette[i].email,
										author: this.lastRecette[i].author, 
										added: this.lastRecette[i].added, 
										id: this.lastRecette[i].id});
						console.log("after loop : " + JSON.stringify(this.arr)); 
					});
				}
				else
				{
					this.arr.push({url: "http://localhost/marrrrrrr/assets/image/generique.png", 
								   name: this.lastRecette[i].name, 
								   email: this.lastRecette[i].email,
								   author: this.lastRecette[i].author, 
								   added: this.lastRecette[i].added, 
								   id: this.lastRecette[i].id});
				}
		
			}
			console.log("after loop : " + JSON.stringify(this.lastRecette)); 
		});		
		
		this.recetteService.getBestRecipe().then(response =>{
			this.bestRecette = response.result;

			for(let i = 0; i <= this.bestRecette.length ; ++i) {

				if (this.bestRecette[i].idimage != null)
				{
					console.log("GET IMAGE");
					this.recetteService.get_image(this.bestRecette[i].idimage).then(response => {
						this.arr2.push({ url : response.result[0].url, 
										 name: this.bestRecette[i].name, 
										 email: this.bestRecette[i].email,
										 author: this.bestRecette[i].author, 
										 added: this.bestRecette[i].added, 
										 id: this.bestRecette[i].id, 
										 average: this.bestRecette[i].average, 
										 nbvote: this.bestRecette[i].nbvote});
						console.log("after loop : " + JSON.stringify(this.arr2)); 
					});
				}
				else
				{
					this.arr2.push({url: "http://localhost/marrrrrrr/assets/image/generique.png", 
									name: this.bestRecette[i].name, email: this.bestRecette[i].email,
									author: this.bestRecette[i].author, added: this.bestRecette[i].added, 
									id: this.bestRecette[i].id,
									average: this.bestRecette[i].average, 
									nbvote: this.bestRecette[i].nbvote});
				}
		
			}
			console.log("after loop : " + JSON.stringify(this.bestRecette)); 
		});
    }
	
	goToDetail(recette: any)
	{
		this.router.navigate(['/detail', recette.id]);
	}

}
