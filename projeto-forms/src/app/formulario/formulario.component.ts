import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  salvar(pessoaForm) {
    const nome = pessoaForm.value.nome;
    const fone = pessoaForm.value.fone;
    const email = pessoaForm.value.email;
    const profissao = pessoaForm.value.profissao;
    console.log(`Nome: ${nome}, Fone: ${fone}, Email: ${email}, Profissão: ${profissao}`)
    }

}
