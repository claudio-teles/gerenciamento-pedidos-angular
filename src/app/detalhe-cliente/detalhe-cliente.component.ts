import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { RequisicaoHttpService } from "../requisicao-http.service";

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css']
})
export class DetalheClienteComponent implements OnInit {

  cliente = {
    id: null,
    nome: "",
    cpf: "",
    dataDeNascimento: ""
  }

  constructor(private activatedRoute: ActivatedRoute, private requisicaoService: RequisicaoHttpService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      paramns => this.cliente.id = paramns['id']
    );

    this.requisicaoService.obterClientePeloId("http://localhost:8080/cliente/"+this.cliente.id.toString()).subscribe(
      resposta => {
        this.cliente.id = resposta['id'];
        this.cliente.nome = resposta['nome'];
        this.cliente.cpf = resposta['cpf'];
        this.cliente.dataDeNascimento = resposta['dataDeNascimento'];
        console.log(resposta);
      }
    );
  }

}
