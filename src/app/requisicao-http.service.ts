import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoHttpService {

  constructor(private httpClient: HttpClient) {}

  enviarCadastroCliente(url: String, cliente: Object): Observable<Object> {
    return this.httpClient.post<Object>(url.toString(), cliente);
  }

  enviarAtualizacaoCliente(url: String, cliente: Object): Observable<Object> {
    return this.httpClient.put<Object>(url.toString(), cliente);
  }

  enviarCadastroProduto(url: String, produto: Object): Observable<Object> {
    return this.httpClient.post<Object>(url.toString(), produto);
  }

  enviarAtualizacaoProduto(url: String, produto: Object): Observable<Object> {
    return this.httpClient.put<Object>(url.toString(), produto);
  }
  
  enviarCadastroPedido(url: String, pedido: Object): Observable<Object> {
    return this.httpClient.post<Object>(url.toString(), pedido);
  }

  enviarAtualizacaoPedido(url: String, pedido: Object): Observable<Object> {
    return this.httpClient.put<Object>(url.toString(), pedido);
  }

  obterTodosOsClientes(url: String): Observable<Array<Object>> {
    return this.httpClient.get<Array<Object>>(url.toString());
  }
  
  obterTodosOsProdutos(url: String): Observable<Array<Object>> {
    return this.httpClient.get<Array<Object>>(url.toString());
  }
  
  obterTodosOsPedidos(url: String): Observable<Array<Object>> {
    return this.httpClient.get<Array<Object>>(url.toString());
  }

  obterClientePeloId(url: String): Observable<Object> {
    return this.httpClient.get<Object>(url.toString());
  }
  
  obterProdutoPeloId(url: String): Observable<Object> {
    return this.httpClient.get<Object>(url.toString());
  }
  
  obterPedidoPeloId(url: String): Observable<Object> {
    return this.httpClient.get<Object>(url.toString());
  }

}
