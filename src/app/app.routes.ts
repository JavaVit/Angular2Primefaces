import { Routes } from '@angular/router';
import {AboutComponent} from "./about.component";
import {TableComponent} from "./table.component";
import {AppComponent} from "./app.component";
import {DataTableDemo} from "./datatabledemo";

export const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'table', component:  TableComponent},
    { path: 'about', component: AboutComponent },
    { path: 'prime-table', component: DataTableDemo }

];