import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteSingleTon } from '../cliente/cliente-singleton';
import { ProdutosSingleton } from '../produtos/produtos-singleton';
import { RequisicaoHttpService } from '../requisicao-http.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  pedido = {
    id: null,
    cliente: {},
    produtos: [],
    dataDaCompra: this.datePipe.transform(new Date(), "yyyy-MM-dd"),
    totalDaCompra: 0
  }

  urlBase: string = "http://localhost:8080";

  sucessoCadastroPedido: boolean = false;
  falhaCadastroPedido: boolean = false;
  carregamento: boolean = false;

  constructor(
      private requisicaoHttp: RequisicaoHttpService, 
      private router: Router,
      private datePipe: DatePipe
    ) {}

  recarregarPagina() {
    window.location.reload();
  }

  fazerPedido() {
    this.pedido.id = null;
    this.carregamento = true;
    this.requisicaoHttp.enviarCadastroPedido(this.urlBase+"/pedido", this.pedido).subscribe(
      value => {
        if (value) {
          this.sucessoCadastroPedido = true;
          this.carregamento = false;
          //setTimeout(() => this.recarregarPagina(), 2000);
          ClienteSingleTon.getInstanciaCliente().resetCliente();
          ProdutosSingleton.getInstanciaDeProduto().limparCarrinho();
          this.pedido.id = null;
        }
        console.log(this.pedido);
      },
      error => {
        if (error) {
          this.falhaCadastroPedido = true;
          this.carregamento = false;
          ClienteSingleTon.getInstanciaCliente().resetCliente();
          ProdutosSingleton.getInstanciaDeProduto().limparCarrinho();
          this.pedido.id = null;
          //setTimeout(() => this.recarregarPagina(), 2000);
        }
        console.log(this.pedido);
      }
    ); 
  }

  ngOnInit(): void {
    console.log('Clientes: -> '+ClienteSingleTon.getInstanciaCliente().getCliente());
    console.log('Carrinho: -> '+ProdutosSingleton.getInstanciaDeProduto().getProdutos());
    this.pedido.cliente = ClienteSingleTon.getInstanciaCliente().getCliente();
    this.pedido.produtos = ProdutosSingleton.getInstanciaDeProduto().getProdutos();

    this.pedido.produtos.forEach(produto => {
      this.pedido.totalDaCompra += (produto['quantidade'] * produto['preco']);
    });
    console.log('Monitorando Pedido: '+this.pedido.dataDaCompra);
  }

}
