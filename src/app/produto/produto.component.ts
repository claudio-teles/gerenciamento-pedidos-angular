import { Component, OnInit } from '@angular/core';
import { ProdutosSingleton } from '../produtos/produtos-singleton';
import { RequisicaoHttpService } from '../requisicao-http.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto = {
    id: null,
    nome: "",
    descricao: "",
    preco: 0,
    quantidade: 0
  }

  sucessoCadastroProduto: boolean = false;
  falhaCadastroProduto: boolean = false; 
  carregamento: boolean = false;

  urlBase: string = "http://localhost:8080";

  constructor(private requisicaoHttp: RequisicaoHttpService) {}

  recarregarPagina() {
    window.location.reload();
  }
  
  cadastrarProduto() {
    this.carregamento = true;
    this.requisicaoHttp.enviarCadastroProduto(this.urlBase+"/produto", this.produto).subscribe(
      value => {
        if (value) {
          this.sucessoCadastroProduto = true;
          this.carregamento = false;
          setTimeout(() => this.recarregarPagina(), 2000);
        }
        console.log(value);
      },
      error => {
        if (error) {
          this.falhaCadastroProduto = true;
          this.carregamento = false;
          setTimeout(() => this.recarregarPagina(), 2000);
        }
        console.log(error);
      }
    );
    console.log(this.produto);
  }

  atualizarProduto() {
    console.log(this.produto);
  }

  ngOnInit(): void {
    this.produto.id = ProdutosSingleton.getInstanciaDeProduto().getProduto()['id'];
    this.produto.nome = ProdutosSingleton.getInstanciaDeProduto().getProduto()['nome'];
    this.produto.descricao = ProdutosSingleton.getInstanciaDeProduto().getProduto()['descricao'];
    this.produto.preco = ProdutosSingleton.getInstanciaDeProduto().getProduto()['preco'];
    this.produto.quantidade = ProdutosSingleton.getInstanciaDeProduto().getProduto()['quantidade'];
  }

}
