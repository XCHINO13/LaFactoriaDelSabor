import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas-home',
  templateUrl: './reservas-home.component.html',
  styleUrls: ['./reservas-home.component.css']
})
export class ReservasHomeComponent implements OnInit {

  public titulo = 'Reserva';
  public usuario!: any;

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario')!);
    console.log(this.usuario);
    if(this.usuario === null){
      this.router.navigate(['login']);
    }
  }

}
