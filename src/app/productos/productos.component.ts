import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  Alfagor= {
    nombre:'Alfagor',
    precio:'10 Bs.'
  };
  BesoN={
    nombre:'Beso de Negro',
    precio:'20 Bs.'
  };
  ChocoB={
    nombre:'Chocolate Blanco',
    precio:'50 Bs.'
  };
  ChocoLeche={
    nombre:'Chocolate con Leche',
    precio:'100 Bs.'
  };
  GrageasArroz={
    nombre:'Grageas de Arroz',
    precio:'150 Bs.'
  };


  ngOnInit(): void {
  }

}
