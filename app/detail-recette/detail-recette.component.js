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
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var DetailRecetteComponent = (function () {
    function DetailRecetteComponent(recetteService, route, location, _fb) {
        this.recetteService = recetteService;
        this.route = route;
        this.location = location;
        this._fb = _fb;
    }
    DetailRecetteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = this._fb.group({
            pseudo: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            note: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            commentaire: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
        });
        this.route.params
            .switchMap(function (params) { return _this.recetteService.getRecetteById(+params['id']); })
            .subscribe(function (response) {
            console.log(JSON.stringify(response));
            var result = response;
            _this.recette = response;
            if (JSON.parse(_this.recette.status) == 200) {
                console.log("Test status = 200 ok");
                _this.recette = _this.recette.result[0];
                console.log("recette2= " + JSON.stringify(_this.recette));
                if (_this.recette.idimage != null) {
                    console.log("GET IMAGE");
                    _this.recetteService.get_image(_this.recette.idimage).then(function (response) {
                        _this.url = response.result[0].url;
                    });
                }
                else {
                    _this.url = "http://localhost/marrrrrrr/assets/image/generique.png";
                }
                _this.recetteService.getIngredients(_this.recette.id)
                    .then(function (response) {
                    _this.ingredients = response.result;
                });
                _this.recetteService.getComments(_this.recette.id)
                    .then(function (response) {
                    _this.comments = response.result;
                });
                _this.recetteService.getCategory(_this.recette.idcategory)
                    .then(function (response) {
                    _this.category = response.result[0];
                });
                _this.recetteService.getAverage(_this.recette.id)
                    .then(function (response) {
                    _this.stat = response.result;
                });
            }
        });
    };
    DetailRecetteComponent.prototype.addNote = function (note) {
        console.log("note >>>>" + note.rating);
        this.myForm.controls['note'].patchValue(note.rating);
    };
    DetailRecetteComponent.prototype.save = function (model) {
        var _this = this;
        console.log(model.value);
        this.recetteService.saveComment(this.recette.id, model.value).then(function (respon) {
            _this.result = respon;
            console.log("RECEIVED : " + JSON.stringify(_this.result));
            if (JSON.parse(_this.result.status) == 200)
                _this.myForm.reset();
        });
        this.recetteService.getComments(this.recette.id)
            .then(function (response) {
            _this.comments = response.result;
        });
        this.recetteService.getAverage(this.recette.id)
            .then(function (response) {
            _this.stat = response.result;
        });
    };
    DetailRecetteComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DetailRecetteComponent.prototype, "comments", void 0);
    DetailRecetteComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/detail-recette/detail-recette.component.html",
            styles: ["\n\n\t"]
        }), 
        __metadata('design:paramtypes', [recette_service_1.RecetteService, router_1.ActivatedRoute, common_1.Location, forms_1.FormBuilder])
    ], DetailRecetteComponent);
    return DetailRecetteComponent;
}());
exports.DetailRecetteComponent = DetailRecetteComponent;
//# sourceMappingURL=detail-recette.component.js.map