import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaAngularCliComponent } from './diretiva-angular-cli/diretiva-angular-cli.component';
import { PessoaCartaoComponent } from './pessoa-cartao/pessoa-cartao.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaAngularCliComponent,
    PessoaCartaoComponent,
    PessoaCadastroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
