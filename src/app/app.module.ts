import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyHTTPComponent } from "./myhttp/myhttp.component";
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, MyHTTPComponent ],
  bootstrap:    [ AppComponent , MyHTTPComponent]
})
export class AppModule { }
