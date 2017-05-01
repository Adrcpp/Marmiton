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
var RatingComponent = (function () {
    function RatingComponent() {
        this.range = [1, 2, 3, 4, 5];
        this.ratingClicked = new core_1.EventEmitter();
        this.star = [];
    }
    RatingComponent.prototype.onClick = function (value) {
        this.rating = value;
        this.ratingClicked.emit({
            rating: this.rating
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RatingComponent.prototype, "rating", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], RatingComponent.prototype, "ratingClicked", void 0);
    RatingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rating',
            template: "\n\t<div class='crop'>\n\t\t<div [title]='rating' *ngFor='let index of range; let i = index'>\n\t\t\t<i (click)='onClick(index)' class=\"ic material-icons\" *ngIf=\"index <= rating ? star[i]='star' : star[i]='star_border'\" > {{ star[i] }}</i>\n\t\t</div>\n\t</div>\n  ",
            styles: ["\n\t\t.crop {\n\t\t\toverflow: hidden;\n\t\t}\n\t\t \n\t\tdiv {\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.ic{\n\t\t\tfloat:left;\n\t\t} \n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], RatingComponent);
    return RatingComponent;
}());
exports.RatingComponent = RatingComponent;
//# sourceMappingURL=rating.component.js.map