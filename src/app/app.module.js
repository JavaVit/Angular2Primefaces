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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var myhttp_component_1 = require("./myhttp/myhttp.component");
var http_1 = require('@angular/http');
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var about_component_1 = require("./about.component");
var table_component_1 = require("./table.component");
var datatabledemo_1 = require("./datatabledemo");
var datatable_1 = require("primeng/components/datatable/datatable");
var shared_1 = require("primeng/components/common/shared");
var common_1 = require("@angular/common");
var CarService_1 = require("./service/CarService");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.routes),
                common_1.CommonModule, shared_1.SharedModule, datatable_1.DataTableModule],
            declarations: [app_component_1.AppComponent,
                myhttp_component_1.MyHTTPComponent,
                table_component_1.TableComponent,
                about_component_1.AboutComponent,
                datatabledemo_1.DataTableDemo],
            bootstrap: [app_component_1.AppComponent,
                myhttp_component_1.MyHTTPComponent],
            providers: [CarService_1.CarService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map