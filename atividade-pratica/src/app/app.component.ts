import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  //Baseado em:
  //Autor: José Carlos Macoratti
  //Data: 06 jul. 2018
  //Título do programa ou código fonte: Angular 5 -  Principais diretivas - II
  //Versão: 0
  //Tipo: tutorial em texto
  //Disponível em:https://www.macoratti.net/18/06/ang_diret2.htm
  //Acesso em: 21 mar. 2022

export class AppComponent {
  title = 'atividade-pratica';
  //definir estrutura alunos e exportar para poder apresentar no html
  alunos = [
    //meu nome
    {
      Nome: 'Janis Caroline Boiko da Rosa',
      Ru: 3416536,
      NomeDoCurso: 'Analise e Desenvolvimento de Sistemas',
      DataDeAniversario: '28/04/1995'
    },
    //nomes criados
    {
      Nome: 'Pedro',
      Ru: 1234567,
      NomeDoCurso: 'Analise e Desenvolvimento de Sistemas',
      DataDeAniversario: '20/01/1990'
    },
    {
      Nome: 'Bruno',
      Ru: 8901234,
      NomeDoCurso: 'Analise e Desenvolvimento de Sistemas',
      DataDeAniversario: '25/01/1992'
    },
    {
      Nome: 'Amanda',
      Ru: 5678901,
      NomeDoCurso: 'Analise e Desenvolvimento de Sistemas',
      DataDeAniversario: '05/11/2002'
    },
    {
      Nome: 'Marcela',
      Ru: 2345678,
      NomeDoCurso: 'Analise e Desenvolvimento de Sistemas',
      DataDeAniversario: '12/03/2006'
    },
  ];
  //variavel aluno
  aluno = this.alunos[0];

}


