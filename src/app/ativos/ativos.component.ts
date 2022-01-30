import { Component, OnInit } from '@angular/core';
import { Aporte } from '../shared/models/Aporte.model';
import { ResponseAtivo } from '../shared/models/ResponseAtivo.model';

import { AtivosService } from './ativos.service';

@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.css'],
})
export class AtivosComponent implements OnInit {
  valorAporte: number;
  qtdeMaxOrdem: number;

  ativos!: ResponseAtivo[];
  aportes!: Aporte[];

  exibirTabelaAportes: boolean;

  _debug: boolean = true;

  constructor(public ativoService: AtivosService) {
    this.valorAporte = this._debug ? 3000 : 0;
    this.qtdeMaxOrdem = this._debug ? 5 : 1;
    this.exibirTabelaAportes = false;
    this.aportes = [];
  }

  ngOnInit(): void {
    this.getAtivos();
  }

  getAtivos() {
    this.ativoService.getAtivos().subscribe((data) => {
      this.ativos = data;
    });
  }

  calcular() {
    //Ordenar por menor posição
    let ativosCompraveis = this.ativos.map((ativo) => {
      return new Aporte(ativo);
    });
    ativosCompraveis.sort(function (ativo1, ativo2) {
      return ativo1.posicao - ativo2.posicao;
    }) as Aporte[];

    //pega as n menores posições (n = this.qtdeMaxOrdem definida pelo usuário na view)
    ativosCompraveis = ativosCompraveis.slice(0, this.qtdeMaxOrdem);

    let menorCotacaoCompravel = ativosCompraveis.reduce(
      (min, ativo) => (min < ativo.cotacao_atual ? +min : +ativo.cotacao_atual),
      ativosCompraveis[0].cotacao_atual
    );

    let aporte: number = +this.valorAporte;

    //Lista de ativos que deixarão de ser compráveis durante execução
    let aporteDesativados: Aporte[] = [];

    //iterage a cad
    while (aporte > menorCotacaoCompravel) {
      let diferenca =
        +ativosCompraveis[1].novaPosicao - +ativosCompraveis[0].novaPosicao;

      if (diferenca > 0) {
        let ativoDeMenorPosicao = ativosCompraveis[0];

        if (ativoDeMenorPosicao.cotacao_atual <= aporte) {
          ativoDeMenorPosicao.qtdeAporte++;
          ativoDeMenorPosicao.novaPosicao = +ativoDeMenorPosicao.novaPosicao + ativoDeMenorPosicao.cotacao_atual;
          aporte -= +ativoDeMenorPosicao.cotacao_atual;
          console.log(`comprou ${ativoDeMenorPosicao.nome} por ${ativoDeMenorPosicao.cotacao_atual}`);
        } else {
          // não é possível comprar ação pq a cotação é maior que o resto do aporte
          // verificar se é possivel fazer outros aportes com o restante
          // isso vai ocorrer frequentemente com FIIs
          // Remove da lista de ativosCompraveis e adiciona no AtivosDesativados
          //SUBSTITUIR POP
          aporteDesativados.push(<Aporte>ativosCompraveis.shift());
        }
      } else {
        ativosCompraveis = this.reordenarListaDeAportes(ativosCompraveis);
      }
    }

    this.aportes = ativosCompraveis.concat(aporteDesativados);
    this.exibirTabelaAportes = true;
  }

  private reordenarListaDeAportes(aportes: Aporte[]) {
    return aportes.sort(function (ativo1, ativo2) {
      return ativo1.novaPosicao - ativo2.novaPosicao;
    });
  }
}
