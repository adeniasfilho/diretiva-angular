import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  
  pessoa: Pessoa = new Pessoa();

  ngOnInit(): void {
  }
  profissoes = ['Engenheiro', 'Professor', 'Quimico', 'Zoólogo'];

  salvar(pessoaForm: NgForm) {
    
    this.pessoa.nome = pessoaForm.value.nome;
    this.pessoa.fone = pessoaForm.value.fone;
    this.pessoa.email = pessoaForm.value.email;
    this.pessoa.profissao = pessoaForm.value.profissao;

    console.log(this.pessoa);
    console.log(pessoaForm);
    }

}
