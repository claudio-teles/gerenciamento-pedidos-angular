import { Component, OnInit } from '@angular/core';
import { RequisicaoHttpService } from '../requisicao-http.service';

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
          setTimeout(() => this.recarregarPagina(), 4000);
        }
        console.log(value);
      },
      error => {
        if (error) {
          this.falhaCadastroCliente = true;
          this.carregamento = false;
          setTimeout(() => this.recarregarPagina(), 4000);
        }
        console.log(error);
      }
    );
  }

  atualizarCliente() {
    console.log(this.cliente);
  }

  ngOnInit(): void {}

}
