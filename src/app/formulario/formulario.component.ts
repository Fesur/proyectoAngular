import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formularioUno = new FormGroup({
    nombre : new FormControl(''),
    apellido : new FormControl(''),
    CI : new FormControl(''),
    Numero_Celular: new FormControl(''),
    Correo: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
