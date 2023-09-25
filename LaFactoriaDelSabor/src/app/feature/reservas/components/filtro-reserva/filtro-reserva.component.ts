import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservaService } from 'src/app/core/services/reserva.service';
import { SweetAlertService } from 'src/app/core/services/sweet-alert.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-filtro-reserva',
  templateUrl: './filtro-reserva.component.html',
  styleUrls: ['./filtro-reserva.component.css']
})
export class FiltroReservaComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({});
  private subs = new SubSink();
  public IReserva!: any;

  constructor(

      private fb: FormBuilder, 
      private reservaServices: ReservaService,
      private sweetAlert: SweetAlertService,
      private router: Router

      ) {
      this.formulario = this.fb.group({
        nombre: ['jhonier martinez'],
        telefono: ['1851123'],
        fechaReserva: ['13-05-2002'],
        cantPersonas: [2],
        horaReserva: ['1:30'],
        lugarReserva: ['barra']
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

  ngOnInit(): void {
  }

  crearReserva() {

    this.IReserva = {
      id_usuario: 1,
      nombre: this.fieldNombre?.value,
      telefono: this.fieldTelefono?.value,
      fechaReserva: this.fieldFechaReserva?.value,
      horaReserva: this.fieldHoraReserva?.value,
      lugarReserva: this.fieldLugarReserva?.value,
    };

    this.subs.add(this.reservaServices.crearReserva(this.IReserva).subscribe( resp => {
      console.log('crear reserva');
      console.log(resp);
      console.log(this.IReserva);
      if(resp.status === 401) {
        this.sweetAlert.alertFracaso(resp.message)
      }
    }))
  }

}
