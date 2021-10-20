import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequisicaoHttpService } from '../requisicao-http.service';

@Component({
  selector: 'app-detalhe-pedido',
  templateUrl: './detalhe-pedido.component.html',
  styleUrls: ['./detalhe-pedido.component.css']
})
export class DetalhePedidoComponent implements OnInit {

  id: any;

  pedido: any;

  constructor(private activatedRoute: ActivatedRoute, private requisicaoHttp: RequisicaoHttpService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.id = params['id']);

    this.requisicaoHttp.obterPedidoPeloId("http://localhost:8080/pedido/"+this.id).subscribe(
      resposta => {
        this.pedido = resposta;
        console.log(this.pedido);
      }
    );
  }

}
