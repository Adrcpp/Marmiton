import { Component, OnInit , Input } 		from '@angular/core';
import { Validators, FormGroup, 
		 FormArray, FormBuilder } 	from '@angular/forms';
import { RecetteService }  			from '../service/recette.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { RatingComponent }  		from '../rating/rating.component';
import 'rxjs/add/operator/switchMap';


@Component({
    templateUrl: `./app/detail-recette/detail-recette.component.html`,
	styles: [`

	`]
})

export class DetailRecetteComponent implements OnInit {
	
	public recette				: any;
	public ingredients			: any;
	public url					: any;
	public myForm   			: FormGroup;
	public result				: any;		
	public category				: any;	
	public stat					: any;	
	@Input() public comments	: any;
	
	constructor(
		private recetteService: RecetteService, 
		private route: ActivatedRoute,
		private location: Location,
		private _fb: FormBuilder){ }
	
	ngOnInit(): void {
		this.myForm = this._fb.group({
            pseudo		: ['', [Validators.required, Validators.minLength(1)]],
			note		: ['', [Validators.required, Validators.minLength(1)]],
			commentaire : ['', [Validators.required, Validators.minLength(1)]],
        });
		
		this.route.params
			.switchMap((params: Params) => this.recetteService.getRecetteById(+params['id']))
			.subscribe(response =>{ 
				console.log(JSON.stringify(response));
				let result = response;
				this.recette = response;
				if (JSON.parse(this.recette.status) == 200)
				{
					console.log("Test status = 200 ok");
					this.recette = this.recette.result[0];
					console.log("recette2= " + JSON.stringify(this.recette));
					
					if (this.recette.idimage != null)
					{
						console.log("GET IMAGE");
						this.recetteService.get_image(this.recette.idimage).then(response =>{
							this.url = response.result[0].url;
						});
					}
					else
					{
						this.url = "http://localhost/marrrrrrr/assets/image/generique.png"
					}
					
					this.recetteService.getIngredients(this.recette.id)
						.then(response =>{
							this.ingredients = response.result;
						});

					this.recetteService.getComments(this.recette.id)
						.then(response =>{
							this.comments = response.result;
						});
					this.recetteService.getCategory(this.recette.idcategory)
						.then(response =>{
							this.category = response.result[0];
						});
					this.recetteService.getAverage(this.recette.id)
						.then(response =>{
							this.stat = response.result;
						});
				}	
			});
	}
	
	addNote(note : any) {
		console.log("note >>>>" + note.rating);
        this.myForm.controls['note'].patchValue(note.rating); 
    }
	
	save(model: any): void {
		console.log(model.value);
		this.recetteService.saveComment(this.recette.id, model.value).then(respon =>{ 
			this.result = respon;
			console.log("RECEIVED : "  + JSON.stringify(this.result));
			if (JSON.parse(this.result.status) == 200)
				this.myForm.reset();		
		});
		this.recetteService.getComments(this.recette.id)
			.then(response =>{
				this.comments = response.result;
		});
		this.recetteService.getAverage(this.recette.id)
			.then(response =>{
				this.stat = response.result;
		});
	}
	
	goBack(): void {
		this.location.back();
	}
	
}
