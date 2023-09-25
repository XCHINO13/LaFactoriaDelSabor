import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/core/services/reserva.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-tabla-reservas',
  templateUrl: './tabla-reservas.component.html',
  styleUrls: ['./tabla-reservas.component.css']
})
export class TablaReservasComponent implements OnInit {

  private subs = new SubSink();

  public Usuario!: any;
  public dataSource: any;

  displayedColumns: string[] = ['nombre', 'fecha_reserva', 'hora_reserva', 'pedido', 'estado'];

  constructor( private reservasService: ReservaService) { }

  ngOnInit(): void {
    this.Usuario = JSON.parse(localStorage.getItem('usuario')!);
    this.consultarReservas();
  }

  consultarReservas(): void {
    this.subs.add(this.reservasService.consultarReserva(this.Usuario!['id_usuario']).subscribe(resp => {
      console.log('resp');
      console.log(resp.data);
      this.dataSource = resp.data
    }))
  }

}
