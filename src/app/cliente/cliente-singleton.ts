export class ClienteSingleTon {

    private static instanciaDeCliente = new ClienteSingleTon();

    private cliente = {
        id: null,
        nome: "",
        cpf: "",
        dataDeNascimento: ""
    }

    private constructor() {}

    static getInstanciaCliente(): ClienteSingleTon {
        if (ClienteSingleTon.instanciaDeCliente === null) {
            ClienteSingleTon.instanciaDeCliente = new ClienteSingleTon();
        }
        return ClienteSingleTon.instanciaDeCliente;
    }

    
    public getCliente(): any {
        return this.cliente
    }

    public setCliente(cliente: any) {
        this.cliente.id = cliente.id;
        this.cliente.nome = cliente.nome;
        this.cliente.cpf = cliente.cpf;
        this.cliente.dataDeNascimento = cliente.dataDeNascimento;
    }

    public resetCliente(): void {
        this.cliente = {
            id: null,
            nome: "",
            cpf: "",
            dataDeNascimento: ""
        }
    }
    
}