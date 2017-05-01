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
var forms_1 = require('@angular/forms');
var recette_service_1 = require('../service/recette.service');
var router_1 = require('@angular/router');
var SearchComponent = (function () {
    function SearchComponent(_fb, recetteService, router) {
        this._fb = _fb;
        this.recetteService = recetteService;
        this.router = router;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.result = null;
    };
    SearchComponent.prototype.searchByName = function (str) {
        var _this = this;
        this.recetteService.search_by_name(str)
            .then(function (response) {
            _this.result = response;
            console.log("RECEIVED : " + JSON.stringify(_this.result));
        });
    };
    SearchComponent.prototype.searchByRecipe = function (recipe) {
        var _this = this;
        this.recetteService.search_by_recipe(recipe)
            .then(function (response) {
            _this.result = response;
            console.log("RECEIVED : " + JSON.stringify(_this.result));
        });
    };
    SearchComponent.prototype.goToDetail = function (recette) {
        this.router.navigate(['/detail', recette.id]);
    };
    SearchComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/search/search.component.html",
            styles: ["\n\t"]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, recette_service_1.RecetteService, router_1.Router])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map