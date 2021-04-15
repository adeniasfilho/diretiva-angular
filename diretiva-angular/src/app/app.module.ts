import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaAngularCliComponent } from './diretiva-angular-cli/diretiva-angular-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaAngularCliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
