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
  // private prevScrollPos = 0;
  public navbar = false;
 
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    console.log(event);
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos === 0) {
      this.navbar = false;
    }
  }
  

  ngOnInit(): void {
    this.calcScreen();
  }

  calcScreen() {
    let screenWidth = window.screen.width;
    console.log(screenWidth);
    if (screenWidth <= 691) {
      this.menuDesplegable = false;
    }
  }



  redireccionLogin() {
    // this.subs.add(this.loginServices.login().subscribe(resp => {
    //   console.log('login');
    //   console.log(resp);
    // },
    // (error) => {
    //   console.error('Error en la solicitud:', error);
    // }))

    this.router.navigate(['login']);
  }

  redireccionHome() {
    this.router.navigate(['home']);
  }

}
