import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisicaoHttpService } from '../requisicao-http.service';
import { ProdutosSingleton } from './produtos-singleton';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos = [];

  carregamento: boolean = false;

  urlBase: string = "http://localhost:8080";

  quantidade = ProdutosSingleton.getInstanciaDeProduto().getProdutos().length;

  constructor(private requisicaoHttp: RequisicaoHttpService, private router: Router) {}

  atualizarProduto(produto: any) {
    ProdutosSingleton.getInstanciaDeProduto().setProduto(produto);
    this.router.navigateByUrl('/produto');
  }

  selecionarProdutoPedido(produto: any) {
    ProdutosSingleton.getInstanciaDeProduto().adicionarProduto(produto);
    this.quantidade = ProdutosSingleton.getInstanciaDeProduto().getProdutos().length;
    console.log(this.quantidade);
  }

  ngOnInit(): void {
    this.carregamento = true;
    this.requisicaoHttp.obterTodosOsProdutos(this.urlBase+"/produtos").subscribe(
      resposta => {
        this.carregamento = false;
        console.log(resposta);
        this.produtos = resposta;
      },
      erro => {
        this.carregamento = false;
        console.log(erro);
      }
    );
  }

}
