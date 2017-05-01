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
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var app_routing_module_1 = require('./route/app-routing.module');
var app_component_1 = require('./app.component');
var home_component_1 = require('./home/home.component');
var recette_component_1 = require('./recette/recette.component');
var detail_recette_component_1 = require('./detail-recette/detail-recette.component');
var recette_service_1 = require('./service/recette.service');
var search_component_1 = require('./search/search.component');
var rating_component_1 = require('./rating/rating.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
            ],
            providers: [
                recette_service_1.RecetteService,
                { provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy },
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                recette_component_1.RecetteComponent,
                detail_recette_component_1.DetailRecetteComponent,
                search_component_1.SearchComponent,
                rating_component_1.RatingComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map