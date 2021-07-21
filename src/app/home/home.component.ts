import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../ofertas.services';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertaService]
})
export class HomeComponent implements OnInit {

  public ofertas!: Oferta []

  constructor(private ofertaService: OfertaService) { }

  ngOnInit(): void {
    //this.ofertas = this.ofertaService.getOfertas()
    //console.log(this.ofertas)
    this.ofertaService.getOfertas2().then(
      (ofertas : Oferta[])=>{console.log('Funfou depois de 3sec'),this.ofertas = ofertas},
      (param: any)=>{console.log(param)}
      )
  }

}
