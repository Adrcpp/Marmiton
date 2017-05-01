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
var recette_service_1 = require('../service/recette.service');
var router_1 = require('@angular/router');
var HomeComponent = (function () {
    function HomeComponent(recetteService, router) {
        this.recetteService = recetteService;
        this.router = router;
        this.arr = [];
        this.arr2 = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recetteService.getLastAddedRecipe().then(function (response) {
            _this.lastRecette = response.result;
            var _loop_1 = function(i) {
                if (_this.lastRecette[i].idimage != null) {
                    console.log("GET IMAGE");
                    _this.recetteService.get_image(_this.lastRecette[i].idimage).then(function (response) {
                        _this.arr.push({ url: response.result[0].url,
                            name: _this.lastRecette[i].name,
                            email: _this.lastRecette[i].email,
                            author: _this.lastRecette[i].author,
                            added: _this.lastRecette[i].added,
                            id: _this.lastRecette[i].id });
                        console.log("after loop : " + JSON.stringify(_this.arr));
                    });
                }
                else {
                    _this.arr.push({ url: "http://localhost/marrrrrrr/assets/image/generique.png",
                        name: _this.lastRecette[i].name,
                        email: _this.lastRecette[i].email,
                        author: _this.lastRecette[i].author,
                        added: _this.lastRecette[i].added,
                        id: _this.lastRecette[i].id });
                }
            };
            for (var i = 0; i <= _this.lastRecette.length; ++i) {
                _loop_1(i);
            }
            console.log("after loop : " + JSON.stringify(_this.lastRecette));
        });
        this.recetteService.getBestRecipe().then(function (response) {
            _this.bestRecette = response.result;
            var _loop_2 = function(i) {
                if (_this.bestRecette[i].idimage != null) {
                    console.log("GET IMAGE");
                    _this.recetteService.get_image(_this.bestRecette[i].idimage).then(function (response) {
                        _this.arr2.push({ url: response.result[0].url,
                            name: _this.bestRecette[i].name,
                            email: _this.bestRecette[i].email,
                            author: _this.bestRecette[i].author,
                            added: _this.bestRecette[i].added,
                            id: _this.bestRecette[i].id,
                            average: _this.bestRecette[i].average,
                            nbvote: _this.bestRecette[i].nbvote });
                        console.log("after loop : " + JSON.stringify(_this.arr2));
                    });
                }
                else {
                    _this.arr2.push({ url: "http://localhost/marrrrrrr/assets/image/generique.png",
                        name: _this.bestRecette[i].name, email: _this.bestRecette[i].email,
                        author: _this.bestRecette[i].author, added: _this.bestRecette[i].added,
                        id: _this.bestRecette[i].id,
                        average: _this.bestRecette[i].average,
                        nbvote: _this.bestRecette[i].nbvote });
                }
            };
            for (var i = 0; i <= _this.bestRecette.length; ++i) {
                _loop_2(i);
            }
            console.log("after loop : " + JSON.stringify(_this.bestRecette));
        });
    };
    HomeComponent.prototype.goToDetail = function (recette) {
        this.router.navigate(['/detail', recette.id]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/home/home.component.html",
        }), 
        __metadata('design:paramtypes', [recette_service_1.RecetteService, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map