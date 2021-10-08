import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteSingleTon } from '../cliente/cliente-singleton';
import { RequisicaoHttpService } from '../requisicao-http.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes = [];

  urlBase: string = "http://localhost:8080";

  carregamento: boolean = false;

  constructor(private requisicaoHttp: RequisicaoHttpService, private router: Router) {}

  atualizarCliente(cliente: any) {
    ClienteSingleTon.getInstanciaCliente().setCliente(cliente);
    this.router.navigateByUrl('/cliente');
  }

  selecionarClientePedido(cliente: any) {
    ClienteSingleTon.getInstanciaCliente().setCliente(cliente);
    this.router.navigateByUrl('/produtos');
  }

  ngOnInit(): void {
    this.carregamento = true;
    this.requisicaoHttp.obterTodosOsClientes(this.urlBase+"/clientes").subscribe(
      resposta => {
        this.carregamento = false;
        console.log(resposta);
        this.clientes = resposta;
      },
      erro => {
        this.carregamento = false;
        console.log(erro);
      }
    );
  }

}
