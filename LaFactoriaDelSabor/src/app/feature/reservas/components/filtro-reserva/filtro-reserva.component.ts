import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IReserva } from 'src/app/core/data/IReserva';
import { UtilFiltros } from 'src/app/core/models/UtilFiltros';
import { ReservaService } from 'src/app/core/services/reserva.service';
import { SubjectsService } from 'src/app/core/services/subjects.service';
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
  public reservaEditar!: IReserva;
  public isFormReady = true;
  // @Input() reservaActualizar!: IReserva;

  @Input() set reservaActualizar(data: IReserva) {
    this.reservaEditar = data;
    this.informacionFiltrosEditar(this.reservaEditar);
    console.log('this.reservaEditar');
    console.log(this.reservaEditar);
    // this.utilInitForm();
  }

  @Output() emitCreacionReserva: EventEmitter<any>  = new EventEmitter();

  public async utilInitForm(): Promise<boolean>{
    return new Promise((resolve)=>{
      this.initForm();
      setTimeout(()=>{
        resolve(this.isFormReady);
      },1000);
    });
  }

  public async validarConstruccionFormulario(): Promise<boolean>{
    return new Promise((resolve)=>{
      const valor = this.formulario.status === 'INVALID' ? true: false;
      resolve(valor);
    });
  }


  constructor(

      private fb: FormBuilder,
      private reservaServices: ReservaService,
      private sweetAlert: SweetAlertService,
      private router: Router,
      private subjectService: SubjectsService

      ) {
        this.initForm();
     }

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

  crearReserva(idReserva: number) {
    console.log('idReserva');
    console.log(this.reservaEditar);
    this.IReserva = {
      id_rol: this.usuario.id_rol,
      id_usuario: this.usuario.id_usuario,
      id_reserva: this.reservaEditar?.id_reserva > 0 ? this.reservaEditar.id_reserva : null,
      nombre: this.fieldNombre?.value,
      telefono: this.fieldTelefono?.value,
      fechaSolicitud: 'fechasoli',
      horaSolicitud: 'hora soli',
      fechaReserva: this.fieldFechaReserva?.value,
      horaReserva: this.fieldHoraReserva?.value,
      lugarReserva: this.fieldLugarReserva?.value,
      cantPersonas: this.fieldCantPersonas?.value,
    };

    this.subs.add(this.reservaServices.crearReserva(this.IReserva).subscribe( resp => {
      console.log('crear reserva');
      console.log(resp);
      if (resp.status === 200) {
        this.emitCreacionReserva.emit("reserva");
        this.limpiarFormulario();
      }
      if(resp.status === 401) {
        this.sweetAlert.alertFracaso(resp.message);
      }
    }))
  }

  public informacionFiltrosEditar(reserva: any): void {
    UtilFiltros.valorInput('nombre', reserva?.nombre, this.formulario);
    UtilFiltros.valorInput('telefono', reserva?.telefono, this.formulario);
    UtilFiltros.valorInput('cantPersonas', reserva?.cant_personas, this.formulario);
    UtilFiltros.valorInput('fechaReserva', reserva?.fecha_reserva, this.formulario);
    UtilFiltros.valorInput('horaReserva', reserva?.hora_reserva, this.formulario);
    UtilFiltros.valorInput('lugarReserva', reserva?.lugar_reserva, this.formulario);
  }

  limpiarFormulario() {
    this.formulario.reset();
  }

}
