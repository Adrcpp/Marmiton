import { NgModule }            		from '@angular/core';
import { RouterModule, Routes } 	from '@angular/router';
import { AppComponent }         	from '../app.component';
import { HomeComponent }  			from '../home/home.component';
import { RecetteComponent }  		from '../recette/recette.component';
import { DetailRecetteComponent }  	from '../detail-recette/detail-recette.component';
import { SearchComponent }  		from '../search/search.component';

const routes: Routes = [
	{ path: '', 			redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home',			component: HomeComponent  },
	{ path: 'recette', 		component: RecetteComponent },
	{ path: 'detail/:id',	component: DetailRecetteComponent  },
	{ path: 'search', 		component: SearchComponent }
];

@NgModule({
	imports: 	[ RouterModule.forRoot(routes) ],
	exports: 	[ RouterModule ]
})

export class AppRoutingModule {}