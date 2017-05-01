import { Injectable } 				from '@angular/core';
import { Headers, Http, Response } 	from '@angular/http';
import { Observable } 				from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RecetteService {

	private url = "http://localhost/marrrrrrr/src/request.php";
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	add_recipe(data: any, formData: FormData): Promise<any[]> 
	{
		return this.http.post(this.url, JSON.stringify({"request": "add recipe", "data": data}), {headers : this.headers})
				.toPromise()
				.then(res => {
					let response = res.json();
					if(response.status == 200 && formData != null){
						console.log("Recipe added, starting updload image");
						formData.append('id',response.id);
							return this.http.post(this.url, formData)
								.toPromise()
								.then(res => res.json());
					}else{
						return response;
					}
				})
				.catch(this.handleError);
	}

	get_image(id: any) : Promise<any>
	{
		return this.http.post(this.url, JSON.stringify({"request": "get image", "data": id}), {headers : this.headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}

	search_by_name(data: any): Promise<any> 
	{
		console.log("search by name : " + JSON.stringify(data));
		return this.http.post(this.url, JSON.stringify({"request": "search name", "data": data}), {headers: this.headers} )
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}

	search_by_recipe(data : any) : Promise<any>
	{
		return this.http.post(this.url, JSON.stringify({"request": "search by recipe", "data": data}), {headers: this.headers})
		.toPromise()
		.then(res => res.json())
		.catch(this.handleError);
	}
	
	getRecetteById(data: any): Promise<any>
	{
		console.log("search by id : " + JSON.stringify(data));
		return this.http.post(this.url, JSON.stringify({"request": "search recette", "data": data}), {headers: this.headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}
	getIngredients(data: any): Promise<any>
	{
		return this.http.post(this.url, JSON.stringify({"request": "get ingredients", "data": data}), {headers: this.headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}

	getLastAddedRecipe(): Promise<any>
	{
		return this.http.post(this.url, JSON.stringify({"request": "last added"}), {headers: this.headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}
	
	getBestRecipe(): Promise<any>
	{
		return this.http.post(this.url, JSON.stringify({"request": "get best"}), {headers: this.headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}
	
	saveComment(id: any, data: any): Promise<any>
	{
		return this.http.post(this.url, JSON.stringify({"request": "save comment", "id": id, "data" : data}), {headers: this.headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}

	getComments(id: any): Promise<any>
	{
		return this.http.post(this.url, JSON.stringify({"request": "get comments", "data": id}), {headers: this.headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}
	
	getCategories(): Promise<any>
	{
		return this.http.post(this.url, JSON.stringify({"request": "get categories"}), {headers: this.headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}
	
	getCategory(id: any): Promise<any>
	{
		return this.http.post(this.url, JSON.stringify({"request": "get category", "data": id}), {headers: this.headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}
	getAverage(id: any): Promise<any>
	{
		return this.http.post(this.url, JSON.stringify({"request": "get average", "data": id}), {headers: this.headers})
				.toPromise()
				.then(res => res.json())
				.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}	
}