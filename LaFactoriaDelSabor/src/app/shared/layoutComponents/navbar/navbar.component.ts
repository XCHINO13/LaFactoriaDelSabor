import { Component, OnInit, HostListener  } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { SubSink } from 'node_modules/subsink';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
  constructor(private router: Router, private loginServices: LoginService, public translate: TranslateService) {
  }

  private subs = new SubSink();
  public menuDesplegable = true;
  public navbar = false;
  public botonAccion!: boolean;
  public nombreBoton!: string;
  public url: string = window.location.pathname;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (window.scrollY > 60) {
      this.navbar = true;
      console.log(this.navbar);
    } else {
      this.navbar = false;
    }
  }

  

  ngOnInit(): void {
    this.calcScreen();
    this.translate.use(localStorage.getItem('idioma')!)
    this.url = window.location.pathname;
    this.loginAndRegister(this.url);
  }

  calcScreen() {
    let screenWidth = window.screen.width;
    console.log(screenWidth);
    if (screenWidth <= 691) {
      this.menuDesplegable = false;
    }
  }



  loginAndRegister(boton?: string) {

    if(this.url == '/login'){
      this.nombreBoton = 'Register';
    } else if(this.url == '/register'){
      this.nombreBoton = 'Login';
      this.botonAccion = true;
    }else {
      this.nombreBoton = 'Login';
      this.botonAccion = true;
    }
    if(boton == 'login'){
      this.nombreBoton = 'Register';
      this.router.navigate(['login']);
      this.botonAccion = false;
    } else if(boton == 'register'){
      this.nombreBoton = 'Login';
      this.router.navigate(['register']);
      this.botonAccion = true;
    }


  }

  redireccionHome() {
    this.router.navigate(['home']);
  }

}
