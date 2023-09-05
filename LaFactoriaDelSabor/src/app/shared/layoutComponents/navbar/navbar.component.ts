import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { SubSink } from 'node_modules/subsink';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private loginServices: LoginService) { }

  private subs = new SubSink();

  ngOnInit(): void {
    
  }

  redireccionLogin() {

    this.subs.add(this.loginServices.login().subscribe(resp => {
      console.log('login');
      console.log(resp);
    },
    (error) => {
      console.error('Error en la solicitud:', error);
    }))

    // this.router.navigate(['login']);
    
  }

}
