import { Component, OnInit } from '@angular/core';
import { RequisicaoHttpService } from '../requisicao-http.service';
import { ClienteSingleTon } from './cliente-singleton';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente = {
    id: null,
    nome: "",
    cpf: "",
    dataDeNascimento: ""
  }

  urlBase: string = "http://localhost:8080";

  sucessoCadastroCliente: boolean = false;
  falhaCadastroCliente: boolean = false;

  sucessoAtualizacaoCliente: boolean = false;
  falhaAtualizacaoCliente: boolean = false;

  carregamento: boolean = false;

  constructor(private requisicaoHttp: RequisicaoHttpService) {}

  recarregarPagina() {
    window.location.reload();
  }

  cadastrarCliente() {
    this.carregamento = true;
    this.requisicaoHttp.enviarCadastroCliente(this.urlBase+"/cliente", this.cliente).subscribe(
      value => {
        if (value) {
          this.sucessoCadastroCliente = true;
          this.carregamento = false;
          setTimeout(() => this.recarregarPagina(), 2000);
        }
        console.log(value);
      },
      error => {
        if (error) {
          this.falhaCadastroCliente = true;
          this.carregamento = false;
          setTimeout(() => this.recarregarPagina(), 2000);
        }
        console.log(error);
      }
    );
  }

  atualizarCliente() {
    this.carregamento = true;
    this.requisicaoHttp.enviarAtualizacaoCliente(this.urlBase+"/cliente", this.cliente).subscribe(
      value => {
        if (value) {
          this.sucessoAtualizacaoCliente = true;
          this.carregamento = false;
          setTimeout(() => this.recarregarPagina(), 2000);
        }
        console.log(value);
      },
      error => {
        if (error) {
          this.falhaCadastroCliente = true;
          this.carregamento = false;
          setTimeout(() => this.recarregarPagina(), 2000);
        }
        console.log(error);
      }
    );
    console.log(this.cliente);
  }

  ngOnInit(): void {
    this.cliente.id = ClienteSingleTon.getInstanciaCliente().getCliente()['id'];
    this.cliente.nome = ClienteSingleTon.getInstanciaCliente().getCliente()['nome'];
    this.cliente.cpf = ClienteSingleTon.getInstanciaCliente().getCliente()['cpf'];
    this.cliente.dataDeNascimento = ClienteSingleTon.getInstanciaCliente().getCliente()['dataDeNascimento'];

    console.log(this.cliente);
  }

}
