import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../Services/gifs.service';

@Component({
	selector: 'app-busqueda',
	templateUrl: './busqueda.component.html',
	styles: [
	]
})
export class BusquedaComponent{
	@ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

	constructor(private gifService: GifsService){

	}

	buscar(){
		const valor = this.txtBuscar.nativeElement.value;
		if(valor == ""){
			return;
		}
		this.gifService.buscarGifs(valor);
		this.txtBuscar.nativeElement.value = '';
	}

}
