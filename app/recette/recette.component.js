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
var RecetteComponent = (function () {
    function RecetteComponent(_fb, recetteService) {
        this._fb = _fb;
        this.recetteService = recetteService;
    }
    RecetteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recetteService.getCategories().then(function (response) { _this.categories = response.result; console.log(JSON.stringify(_this.categories)); });
        var emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.add = false;
        this.myForm = this._fb.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.pattern(emailRegex)]],
            author: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            category: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            ingredients: this._fb.array([
                this.initIngredient(),
            ])
        });
        this.formData = null;
    };
    RecetteComponent.prototype.initIngredient = function () {
        return this._fb.group({
            type: ['solide', forms_1.Validators.required],
            nom: ['', forms_1.Validators.required],
            quantite: ['', forms_1.Validators.required],
            unite: ['', forms_1.Validators.required]
        });
    };
    RecetteComponent.prototype.addIngredient = function () {
        var control = this.myForm.controls['ingredients'];
        control.push(this.initIngredient());
    };
    RecetteComponent.prototype.removeIngredient = function (i) {
        var control = this.myForm.controls['ingredients'];
        control.removeAt(i);
    };
    RecetteComponent.prototype.save = function (model, $event) {
        var _this = this;
        $event.preventDefault();
        console.log(model.value);
        this.recetteService.add_recipe(model.value, this.formData).then(function (respon) {
            _this.result = respon;
            console.log("RECEIVED : " + JSON.stringify(_this.result));
            if (JSON.parse(_this.result.status) == 200) {
                _this.myForm.reset();
                _this.add = false;
            }
        });
    };
    RecetteComponent.prototype.onChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            this.formData = new FormData();
            this.formData.append('image', file, file.name);
            console.log("formdata" + this.formData);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RecetteComponent.prototype, "categories", void 0);
    RecetteComponent = __decorate([
        core_1.Component({
            templateUrl: "./app/recette/recette.component.html",
            styles: ["\n\t.opt {\n\t\tposition: inherit;\n\t\tleft: -9999px;\n\t\topacity: 1;\n\t}\n\t.select{\n\t\tdisplay: block;\n\t}\n\t.ingredient{\n\t\tdisplay: flex;\n\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, recette_service_1.RecetteService])
    ], RecetteComponent);
    return RecetteComponent;
}());
exports.RecetteComponent = RecetteComponent;
//# sourceMappingURL=recette.component.js.map