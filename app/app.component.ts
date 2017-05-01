import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
	<div style="min-height: 808px;">
  		<nav>
			<div class="navbar-fixed green">
			  <a routerLink="/home" class="brand-logo right">Logo</a>
			  <ul id="nav-mobile" class="left hide-on-med-and-down ">
				<li><a routerLink="/home">ACCUEIL</a></li>
				<li><a routerLink="/recette">RECETTE</a></li>
				<li><a routerLink="/search">RECHERCHE</a></li>
			  </ul>
			</div>
		</nav>
		<router-outlet ><div style="padding-top:5%"></div></router-outlet>
	</div>
	<footer class="page-footer green">
	  <div class="container">
		<div class="row">
		  <div class="col l6 s12">
			<h5 class="white-text">Projet Marmiton</h5>
			<p class="grey-text text-lighten-4">Gestion de recette communautaire.</p>
		  </div>
		  <div class="col l4 offset-l2 s12">
			<h5 class="white-text">Links</h5>
			<ul>
			  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
			  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
			  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
			  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
			</ul>
		  </div>
		</div>
	  </div>
	  <div class="footer-copyright">
		<div class="container">
		© 2017 cesaro_a 
		<a class="grey-text text-lighten-4 right" href="#!">More Links</a>
		</div>
	  </div>
	</footer>
  `,
})
export class AppComponent  {
}
