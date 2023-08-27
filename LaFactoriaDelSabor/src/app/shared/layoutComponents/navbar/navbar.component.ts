import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private loginServices: LoginService) { }

  

  ngOnInit(): void {
    
  }

  redireccionLogin() {

    console.log(this.loginServices.login());

    // this.router.navigate(['login']);
    
  }

}
