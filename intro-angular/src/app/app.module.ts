import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeiroAngularComponent } from './primeiro-angular/primeiro-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroAngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
