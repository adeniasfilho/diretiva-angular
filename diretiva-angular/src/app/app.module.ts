import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaAngularCliComponent } from './diretiva-angular-cli/diretiva-angular-cli.component';
import { PessoaCartaoComponent } from './pessoa-cartao/pessoa-cartao.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { SombraNaTabelaDirective } from './sombra-na-tabela.directive';
import { TestePipesComponent } from './teste-pipes/teste-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaAngularCliComponent,
    PessoaCartaoComponent,
    PessoaCadastroComponent,
    SombraNaTabelaDirective,
    TestePipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
