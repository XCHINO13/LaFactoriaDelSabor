import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/core/data/IUsuario';
import { LoginService } from 'src/app/core/services/login.service';
import { SweetAlertService } from 'src/app/core/services/sweet-alert.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({});
  private subs = new SubSink();
  public IUsuario!: IUsuario;

  constructor(
    private fb: FormBuilder, 
    private loginServices: LoginService,
    private sweetAlert: SweetAlertService,
    private router: Router
    ) {
    this.formulario = this.fb.group({
      usuario: ['admin@asd.com'],
      contasena: ['admin'],
    });
  }

  get fieldUsuario(): AbstractControl | null {
    return this.formulario.get('usuario');
  }
  get fieldContrasena(): AbstractControl | null {
    return this.formulario.get('contasena');
  }

  ngOnInit(): void {}

  loginUser() {
    this.IUsuario = {
      correo: this.fieldUsuario?.value,
      contrasena: this.fieldContrasena?.value,
    };

    this.subs.add(
      this.loginServices.login(this.IUsuario).subscribe(respuesta => {
          if(respuesta.status === 200){
            console.log('----USUARIO----');
            console.log(respuesta.data.rows[0]);
            localStorage.setItem('usuario', JSON.stringify(respuesta.data.rows[0]));
            this.sweetAlert.alertExitoso('Se inicio sesion correctamente.');
            this.router.navigate(['reservas'])
          } else if(respuesta.status === 404){
            console.log(respuesta);
            this.sweetAlert.alertFracaso('Error al iniciar sesion.');
          }
          
        }, (error) => {
          if (error.status == 500) {
            console.log('Error en la solicitud:', error.status);
          }
      })
    );
  }
}
