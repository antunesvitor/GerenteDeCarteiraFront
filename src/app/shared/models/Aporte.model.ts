import { ResponseAtivo } from "./ResponseAtivo.model";

export class Aporte extends ResponseAtivo{

    qtdeAporte: number;
    novaPosicao: number;

    ativado! :boolean;

    constructor(ativo: ResponseAtivo){
        super();

        this.id = ativo.id;
        this.codigo = ativo.codigo;
        this.nome = ativo.nome;
        this.posicao = ativo.posicao;
        this.quantidade = ativo.quantidade;
        this.tipo = ativo.tipo;
        this.cotacao_atual = ativo.cotacao_atual;
        this.preco_medio = ativo.preco_medio;
        this.rendimento = ativo.rendimento;
        this.porcentagem_atual = ativo.porcentagem_atual;
        this.porcentagem_alvo = ativo.porcentagem_alvo;

        this.qtdeAporte = 0;
        this.novaPosicao = ativo.posicao;
        this.ativado = true;
    }
}
