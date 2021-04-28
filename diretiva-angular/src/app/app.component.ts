/*import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

textoBotao = "Esconder";
esconder = false;

pessoas = [
  { nome: "José", idade: 18 },
  { nome: "Maria", idade: 22 }
  ];

alterarExibicao() {
this.textoBotao = this.esconder ? "Esconder" : "Exibir";
this.esconder = !this.esconder;
}

onAdicionarPessoa(pessoa) {
  this.pessoas = [pessoa, ...this.pessoas];
  }


pegarCor(idade){
  return idade >= 30 ? "red": "blue";
}
}*/
import { Component } from '@angular/core';
@Component({
    selector: 'app-root',  
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    lembretes: Array<string> = [];
    lembrete: string;
    variavelSombra: string = '10px 10px yellow';
    
    salvar() {
    this.lembretes = [this.lembrete, ...this.lembretes];
    this.lembrete = '';
    }
}