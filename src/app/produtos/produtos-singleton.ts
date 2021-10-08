export class ProdutosSingleton {

    private static instanciaDeProduto = new ProdutosSingleton();

    private produto = {
        id: null,
        nome: "",
        descricao: "",
        preco: 0,
        quantidade: 0
    }

    private carrinho: Array<any> = [];

    private constructor() {}

    static getInstanciaDeProduto(): ProdutosSingleton {
        if (ProdutosSingleton.instanciaDeProduto === null) {
            ProdutosSingleton.instanciaDeProduto = new ProdutosSingleton();
        }
        return ProdutosSingleton.instanciaDeProduto;
    }

    public getProduto(): any {
        return this.produto;
    }

    public setProduto(produto: any): void {
        this.produto.id = produto['id'];
        this.produto.nome = produto['nome'];
        this.produto.descricao = produto['descricao'];
        this.produto.preco = produto['preco'];
        this.produto.quantidade = produto['quantidaded'];
    }

    public getProdutos(): Array<any> {
        return this.carrinho;
    }

    public adicionarProduto(produto: any): void {
        this.carrinho.push(produto);
    }

}