import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PedidoComponent } from './pedido/pedido.component';
import { DetalhePedidoComponent } from './detalhe-pedido/detalhe-pedido.component';
import { PedidosComponent } from './pedidos/pedidos.component';

export const routes: Routes = [
  {path: 'cliente', component: ClienteComponent},
  {path: 'cliente/:id', component: DetalheClienteComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'produto/:id', component: DetalheProdutoComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'pedido', component: PedidoComponent},
  {path: 'pedido/:id', component: DetalhePedidoComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
