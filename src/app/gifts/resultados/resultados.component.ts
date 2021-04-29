import { Component, OnInit } from '@angular/core';
import { GifsService } from '../Services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent{

  get resultados(){
    return this.gifService.resultados;
  }

  constructor(private gifService: GifsService) { }

}
