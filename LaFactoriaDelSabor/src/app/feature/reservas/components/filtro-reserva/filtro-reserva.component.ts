import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IReserva } from 'src/app/core/data/IReserva';
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
  public IReserva!: IReserva;
  public usuario: any;

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
        horaReserva: ['1:30'],
        lugarReserva: ['barra'],
        cantPersonas: [2],
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

  crearReserva() {

  
    this.IReserva = {
      id_usuario: this.usuario.id_usuario,
      nombre: this.fieldNombre?.value,
      telefono: this.fieldTelefono?.value,
      fechaSolicitud: 'fechasoli',
      horaSolicitud: 'hora soli',
      fechaReserva: this.fieldFechaReserva?.value,
      horaReserva: this.fieldHoraReserva?.value,
      lugarReserva: this.fieldLugarReserva?.value,
      cantPersonas: this.fieldCantPersonas?.value,
    };

    console.log(this.IReserva);

    this.subs.add(this.reservaServices.crearReserva(this.IReserva).subscribe( resp => {
      console.log('crear reserva');
      console.log(resp);
      if(resp.status === 401) {
        this.sweetAlert.alertFracaso(resp.message)
      }
    }))
  }

}
