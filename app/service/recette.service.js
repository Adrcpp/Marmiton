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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var RecetteService = (function () {
    function RecetteService(http) {
        this.http = http;
        this.url = "http://localhost/marrrrrrr/src/request.php";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    RecetteService.prototype.add_recipe = function (data, formData) {
        var _this = this;
        return this.http.post(this.url, JSON.stringify({ "request": "add recipe", "data": data }), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            var response = res.json();
            if (response.status == 200 && formData != null) {
                console.log("Recipe added, starting updload image");
                formData.append('id', response.id);
                return _this.http.post(_this.url, formData)
                    .toPromise()
                    .then(function (res) { return res.json(); });
            }
            else {
                return response;
            }
        })
            .catch(this.handleError);
    };
    RecetteService.prototype.get_image = function (id) {
        return this.http.post(this.url, JSON.stringify({ "request": "get image", "data": id }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RecetteService.prototype.search_by_name = function (data) {
        console.log("search by name : " + JSON.stringify(data));
        return this.http.post(this.url, JSON.stringify({ "request": "search name", "data": data }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RecetteService.prototype.search_by_recipe = function (data) {
        return this.http.post(this.url, JSON.stringify({ "request": "search by recipe", "data": data }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RecetteService.prototype.getRecetteById = function (data) {
        console.log("search by id : " + JSON.stringify(data));
        return this.http.post(this.url, JSON.stringify({ "request": "search recette", "data": data }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RecetteService.prototype.getIngredients = function (data) {
        return this.http.post(this.url, JSON.stringify({ "request": "get ingredients", "data": data }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RecetteService.prototype.getLastAddedRecipe = function () {
        return this.http.post(this.url, JSON.stringify({ "request": "last added" }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RecetteService.prototype.getBestRecipe = function () {
        return this.http.post(this.url, JSON.stringify({ "request": "get best" }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RecetteService.prototype.saveComment = function (id, data) {
        return this.http.post(this.url, JSON.stringify({ "request": "save comment", "id": id, "data": data }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RecetteService.prototype.getComments = function (id) {
        return this.http.post(this.url, JSON.stringify({ "request": "get comments", "data": id }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RecetteService.prototype.getCategories = function () {
        return this.http.post(this.url, JSON.stringify({ "request": "get categories" }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RecetteService.prototype.getCategory = function (id) {
        return this.http.post(this.url, JSON.stringify({ "request": "get category", "data": id }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RecetteService.prototype.getAverage = function (id) {
        return this.http.post(this.url, JSON.stringify({ "request": "get average", "data": id }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RecetteService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    RecetteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RecetteService);
    return RecetteService;
}());
exports.RecetteService = RecetteService;
//# sourceMappingURL=recette.service.js.map