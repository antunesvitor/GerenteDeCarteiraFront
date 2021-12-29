import { Component, OnInit } from '@angular/core';
import { ResponseAtivo } from '../shared/models/ResponseAtivo.model';

import { AtivosService } from './ativos.service';

@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.css']
})
export class AtivosComponent implements OnInit {

  ativos!: ResponseAtivo[];

  constructor(
    public ativoService: AtivosService
  ) { }
  
  ngOnInit(): void {
    this.getAtivos();
  }

  getAtivos(){
    this.ativoService.getAtivos().subscribe(data => {
      this.ativos = data;
      console.log(this.ativos);
    })
  }
}
