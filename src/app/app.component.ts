import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `    <h1>Hello {{name}}</h1>
                <a [routerLink]="['/']">Home</a>
                <a [routerLink]="['/table']">Table</a>
                <a [routerLink]="['/about']">About</a>
        
                <div class="outer-outlet">
                   <router-outlet></router-outlet>
                </div>
`
})
export class AppComponent { name = 'Angular'; }