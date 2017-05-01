"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<div style=\"min-height: 808px;\">\n  \t\t<nav>\n\t\t\t<div class=\"navbar-fixed green\">\n\t\t\t  <a routerLink=\"/home\" class=\"brand-logo right\">Logo</a>\n\t\t\t  <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down \">\n\t\t\t\t<li><a routerLink=\"/home\">ACCUEIL</a></li>\n\t\t\t\t<li><a routerLink=\"/recette\">RECETTE</a></li>\n\t\t\t\t<li><a routerLink=\"/search\">RECHERCHE</a></li>\n\t\t\t  </ul>\n\t\t\t</div>\n\t\t</nav>\n\t\t<router-outlet ><div style=\"padding-top:5%\"></div></router-outlet>\n\t</div>\n\t<footer class=\"page-footer green\">\n\t  <div class=\"container\">\n\t\t<div class=\"row\">\n\t\t  <div class=\"col l6 s12\">\n\t\t\t<h5 class=\"white-text\">Projet Marmiton</h5>\n\t\t\t<p class=\"grey-text text-lighten-4\">Gestion de recette communautaire.</p>\n\t\t  </div>\n\t\t  <div class=\"col l4 offset-l2 s12\">\n\t\t\t<h5 class=\"white-text\">Links</h5>\n\t\t\t<ul>\n\t\t\t  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 1</a></li>\n\t\t\t  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 2</a></li>\n\t\t\t  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 3</a></li>\n\t\t\t  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 4</a></li>\n\t\t\t</ul>\n\t\t  </div>\n\t\t</div>\n\t  </div>\n\t  <div class=\"footer-copyright\">\n\t\t<div class=\"container\">\n\t\t\u00A9 2017 cesaro_a \n\t\t<a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n\t\t</div>\n\t  </div>\n\t</footer>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map