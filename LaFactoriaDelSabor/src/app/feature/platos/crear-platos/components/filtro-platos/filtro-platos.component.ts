import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-filtro-platos',
  templateUrl: './filtro-platos.component.html',
  styleUrls: ['./filtro-platos.component.css']
})
export class FiltroPlatosComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({});
  private subs = new SubSink();
  public usuario: any;

  constructor(
    private fb: FormBuilder,
  ) { }

  public initForm(): void{
    this.formulario = this.fb.group({
      nombre: [],
      telefono: [],
      fechaReserva: [],
      horaReserva: [],
      lugarReserva: [],
      cantPersonas: [],
    });
   }


   get fieldNombre(): AbstractControl | null {
    return this.formulario.get('nombre');
  }
  get fieldTelefono(): AbstractControl | null {
    return this.formulario.get('telefono');
  }
  get fieldFechaReserva(): AbstractControl | null {
    return this.formulario.get('fechaReserva');
  }
  get fieldHoraReserva(): AbstractControl | null {
    return this.formulario.get('horaReserva');
  }
  get fieldLugarReserva(): AbstractControl | null {
    return this.formulario.get('lugarReserva');
  }
  get fieldCantPersonas(): AbstractControl | null {
    return this.formulario.get('cantPersonas');
  }

ngOnInit(): void {
  this.usuario = JSON.parse(localStorage.getItem('usuario')!)
}
}
