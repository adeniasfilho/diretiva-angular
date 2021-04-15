import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretiva-angular';
  textoBotao = "Esconder";
  esconder = false;

  pessoas = [
    {nome: "Roberto", idade: 18},
    {nome: "Mariana", idade: 21}
  ];
  alterarExibicao() {
    this.textoBotao = this.esconder ? "Esconder" : "Exibir";
    this.esconder = !this.esconder;
  }
  pegarCor(idade) {
    return idade >= 30 ? "red" : "blue";
  }
}

