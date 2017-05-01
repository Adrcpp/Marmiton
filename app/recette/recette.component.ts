import { Component, OnInit, Input } 		from '@angular/core';
import { Validators, FormGroup, 
		 FormArray, FormBuilder } 	from '@angular/forms';
import { RecetteService }  			from '../service/recette.service';


@Component({
    templateUrl: `./app/recette/recette.component.html`,
	styles: [`
	.opt {
		position: inherit;
		left: -9999px;
		opacity: 1;
	}
	.select{
		display: block;
	}
	.ingredient{
		display: flex;
	}
	`]
})

export class RecetteComponent implements OnInit {
	public myForm     : FormGroup; 
	public add        : boolean;
	public result     : any;
	public formData   : FormData;
	@Input() public categories : any;
	
	constructor(private _fb: FormBuilder, private recetteService: RecetteService){ }
	
    ngOnInit() {
		this.recetteService.getCategories().then(response =>{this.categories = response.result; console.log(JSON.stringify(this.categories));});
		var emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
     	this.add = false;
		this.myForm = this._fb.group({
            name		: ['', [Validators.required, Validators.minLength(1)]],
			email		: ['', [Validators.required, Validators.pattern(emailRegex)]],
			author		: ['', [Validators.required, Validators.minLength(1)]],
			category	: ['', [Validators.required, Validators.minLength(1)]],
            ingredients: this._fb.array([
                this.initIngredient(),
            ])
        });
		this.formData = null;
    }
	
	initIngredient() {
        return this._fb.group({
            type: ['solide', Validators.required],
            nom: ['', Validators.required],
			quantite: ['', Validators.required],
			unite: ['', Validators.required]
        });
    }
	
	addIngredient() {
        const control = <FormArray>this.myForm.controls['ingredients'];
		control.push(this.initIngredient());
    }

    removeIngredient(i: number) {
        const control = <FormArray>this.myForm.controls['ingredients'];
        control.removeAt(i);
    }
	
	save(model: any, $event: any) {
		$event.preventDefault();
        console.log(model.value);
		this.recetteService.add_recipe(model.value, this.formData).then(respon =>{ 
			this.result = respon;
			console.log("RECEIVED : "  + JSON.stringify(this.result));
			if (JSON.parse(this.result.status) == 200)
			{
				this.myForm.reset();
				this.add = false;		
			}
		});
    }

	onChange(event: any) {
		let fileList: FileList = event.target.files;
		if(fileList.length > 0) {
			let file : File = fileList[0];
			this.formData = new FormData();
			this.formData.append('image', file, file.name);
			
			console.log("formdata" + this.formData);
		}
	}
}
