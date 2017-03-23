import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {MyHTTPComponent} from "./myhttp/myhttp.component";
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {AboutComponent} from "./about.component";
import {TableComponent} from "./table.component";
import {DataTableDemo} from "./datatabledemo";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {SharedModule} from "primeng/components/common/shared";
import {CommonModule} from "@angular/common";
import {CarService} from "./service/CarService";

@NgModule({
    imports: [BrowserModule,
        HttpModule,
        RouterModule.forRoot(routes),
        CommonModule, SharedModule, DataTableModule],
    declarations: [AppComponent,
        MyHTTPComponent,
        TableComponent,
        AboutComponent,
        DataTableDemo],
    bootstrap: [AppComponent,
        MyHTTPComponent],
    providers:[CarService]
})
export class AppModule {
}
