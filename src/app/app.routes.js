"use strict";
var about_component_1 = require("./about.component");
var table_component_1 = require("./table.component");
var app_component_1 = require("./app.component");
var datatabledemo_1 = require("./datatabledemo");
exports.routes = [
    { path: 'home', component: app_component_1.AppComponent },
    { path: 'table', component: table_component_1.TableComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'prime-table', component: datatabledemo_1.DataTableDemo }
];
//# sourceMappingURL=app.routes.js.map