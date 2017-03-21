import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyHTTPComponent } from "./myhttp/myhttp.component";
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {AboutComponent} from "./about.component";
import {TableComponent} from "./table.component";

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  RouterModule.forRoot(routes)],
  declarations: [ AppComponent,
                  MyHTTPComponent,
                  TableComponent,
                  AboutComponent ],
  bootstrap:    [ AppComponent,
                  MyHTTPComponent]
})
export class AppModule { }
