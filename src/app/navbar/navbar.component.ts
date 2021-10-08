import { Component, OnInit } from '@angular/core';
import { ProdutosSingleton } from '../produtos/produtos-singleton';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {}

  quantidadeDeItensNoCarrinho = 0;

  ngOnInit(): void {}

}
