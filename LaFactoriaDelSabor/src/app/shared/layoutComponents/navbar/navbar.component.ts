import { Component, OnInit, HostListener  } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { SubSink } from 'node_modules/subsink';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
  constructor(private router: Router, private loginServices: LoginService) {
  }

  private subs = new SubSink();
  public menuDesplegable = true;
  public navbar = false;
  public botonAccion!: string;

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
    this.botonAccion = 'login';
    console.log(this.botonAccion);
  }

  calcScreen() {
    let screenWidth = window.screen.width;
    console.log(screenWidth);
    if (screenWidth <= 691) {
      this.menuDesplegable = false;
    }
  }



  redireccionLogin() {

    if(this.botonAccion == 'login'){
      this.botonAccion = 'Register';
      this.router.navigate(['login']);
    } else if(this.botonAccion == 'Register'){
      this.botonAccion = 'login';
      this.router.navigate(['Register']);
    }

  }

  redireccionHome() {
    this.router.navigate(['home']);
  }

}
