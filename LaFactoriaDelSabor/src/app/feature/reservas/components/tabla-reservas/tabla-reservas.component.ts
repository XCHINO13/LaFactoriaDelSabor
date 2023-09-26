import { Component, OnInit, EventEmitter  } from '@angular/core';
import { IReserva } from 'src/app/core/data/IReserva';
import { ReservaService } from 'src/app/core/services/reserva.service';
import { SweetAlertService } from 'src/app/core/services/sweet-alert.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-tabla-reservas',
  templateUrl: './tabla-reservas.component.html',
  styleUrls: ['./tabla-reservas.component.css']
})
export class TablaReservasComponent implements OnInit {

  private subs = new SubSink();

  public usuario!: any;
  public dataSource: any;

  displayedColumns: string[] = ['nombre', 'fecha_reserva', 'hora_reserva', 'personas', 'lugar', 'pedido', 'estado', 'opciones'];

  constructor( 
    private reservasService: ReservaService,
    private sweetAlert: SweetAlertService
    ) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario')!);
    this.consultarReservas();
  }

  consultarReservas(): void {
    this.subs.add(this.reservasService.consultarReserva(this.usuario!['id_usuario']).subscribe(resp => {
      console.log('resp');
      console.log(resp.data);
      this.dataSource = resp.data
    }))
  }

  eliminarReserva(id_reserva: number) {
    console.log(id_reserva);
    
    this.subs.add(this.reservasService.eliminarReserva(id_reserva).subscribe(resp => {
      if(resp.status === 200){
        this.sweetAlert.alertExitoso(resp.message);
        this.consultarReservas();
      }
    }));


  }

  editarReserva(id_reserva: number) {
    this.eliminarReserva(id_reserva)
  }

}
