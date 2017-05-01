import { NgModule }      					from '@angular/core';
import { HttpModule }    					from '@angular/http';
import { BrowserModule } 					from '@angular/platform-browser';
import { HashLocationStrategy, 
		 LocationStrategy } 				from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } 				from './route/app-routing.module';
import { AppComponent }  					from './app.component';
import { HomeComponent }  					from './home/home.component';
import { RecetteComponent }  				from './recette/recette.component';
import { DetailRecetteComponent }  			from './detail-recette/detail-recette.component';
import { RecetteService }  					from './service/recette.service';
import { SearchComponent }  				from './search/search.component';
import { RatingComponent }  				from './rating/rating.component';

@NgModule({
	imports:      [ 
					HttpModule,
					BrowserModule,
					AppRoutingModule,
					FormsModule,
					ReactiveFormsModule,
				],
	providers:  [ 
					RecetteService,
					{provide: LocationStrategy, 
					useClass: HashLocationStrategy},
				],
	declarations: [ 
					AppComponent,
					HomeComponent,
					RecetteComponent,
					DetailRecetteComponent,
					SearchComponent,
					RatingComponent
				],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
