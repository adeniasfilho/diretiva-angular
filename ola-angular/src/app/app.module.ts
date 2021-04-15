import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OlaAngularComponent} from './ola-angular/ola-angular.component';

import { AppComponent } from './app.component';
import { OlaAngularCliComponent } from './ola-angular-cli/ola-angular-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    OlaAngularComponent,
    OlaAngularCliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
