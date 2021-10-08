import { Component, OnInit } from '@angular/core';
import { RequisicaoHttpService } from '../requisicao-http.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos = [];

  urlBase: string = "http://localhost:8080";

  carregamento: boolean = false;

  constructor(private requisicaoHttp: RequisicaoHttpService) {}

  ngOnInit(): void {
    this.carregamento = true;
    this.requisicaoHttp.obterTodosOsPedidos(this.urlBase+"/pedidos").subscribe(
      resposta => {
        this.carregamento = false;
        console.log(resposta);
        this.pedidos = resposta;
      },
      erro => {
        this.carregamento = false;
        console.log(erro);
      }
    );
  }

}
