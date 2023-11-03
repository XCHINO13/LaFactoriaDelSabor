import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/core/data/IUsuario';
import { LoginService } from 'src/app/core/services/login.service';
import { ReservaService } from 'src/app/core/services/reserva.service';
import { SweetAlertService } from 'src/app/core/services/sweet-alert.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-filtro-register',
  templateUrl: './filtro-register.component.html',
  styleUrls: ['./filtro-register.component.css']
})
export class FiltroRegisterComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({});
  private subs = new SubSink();
  public usuario!: IUsuario;

  constructor(
    private fb: FormBuilder, 
    private loginServices: LoginService,
    private sweetAlert: SweetAlertService,
    private router: Router

    ) {
    this.formulario = this.fb.group({
      nombre: [''],
      cedula: [''],
      telefono: [''],
      correo: [''],
      contrasena: ['']
      // nombre: ['jhonier yela'],
      // cedula: ['51355165'],
      // telefono: ['1851123'],
      // correo: ['clienteprueba'],
      // contrasena: ['112233']
    });}

    get fieldNombre(): AbstractControl | null {
      return this.formulario.get('nombre');
    }
    get fieldCedula(): AbstractControl | null {
      return this.formulario.get('cedula');
    }
    get fieldTelefono(): AbstractControl | null {
      return this.formulario.get('telefono');
    }
    get fieldCorreo(): AbstractControl | null {
      return this.formulario.get('correo');
    }
    get fieldContrasena(): AbstractControl | null {
      return this.formulario.get('contrasena');
    }

  ngOnInit(): void {
  }

  crearUsuario(){

    this.usuario = {
    nombre: this.fieldNombre?.value,
    cedula: this.fieldCedula?.value,
    telefono: this.fieldTelefono?.value,
    correo: this.fieldCorreo?.value,
    contrasena: this.fieldContrasena?.value
    }

    this.subs.add(this.loginServices.register(this.usuario).subscribe(resp => {
      if(resp.status === 200) {
        this.sweetAlert.alertExitoso(resp.message)
      } else if(resp.status === 400) {
        this.sweetAlert.alertFracaso(resp.message)
      }else {
        this.sweetAlert.alertFracaso(resp.message)
      }
    }))
  }

  limpiarFormulario() {
    console.log('LIMPIAR');
    this.formulario.reset();
  }

}
