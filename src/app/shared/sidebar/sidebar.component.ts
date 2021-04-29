import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifts/Services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  get historial(){
    return this.gifService.historial;
  }
  constructor(private gifService: GifsService) { }
  
  buscar(query: string){
    this.gifService.buscarGifs(query);
  }
}
