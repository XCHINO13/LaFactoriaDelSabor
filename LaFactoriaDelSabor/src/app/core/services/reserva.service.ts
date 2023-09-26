import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }

  public headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public crearReserva(reserva: any): Observable<any> {
    return this.http.post<any>(`${environment.url}reservas/registrarReserva`, reserva, this.headers);
  }

  public consultarReserva(idUsuario: number): Observable<any> {
    console.log(idUsuario);
    return this.http.post<number>(`${environment.url}reservas/consultarReservas/${idUsuario}`, this.headers);
  }
  
  public eliminarReserva(id_reserva: number): Observable<any> {
    console.log(id_reserva);
    return this.http.post<number>(`${environment.url}reservas/eliminarReserva/${id_reserva}`, this.headers);
  }
}
