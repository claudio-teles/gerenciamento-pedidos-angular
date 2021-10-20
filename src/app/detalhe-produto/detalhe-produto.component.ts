import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { RequisicaoHttpService } from "../requisicao-http.service";

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

  id: any;
  produto: any;

  constructor(private activatedRoute: ActivatedRoute, private requisicaoHttp: RequisicaoHttpService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.id = params['id']);

    this.requisicaoHttp.obterProdutoPeloId("http://localhost:8080/produto/"+this.id).subscribe(
      resposta => this.produto = resposta
    );
  }

}
