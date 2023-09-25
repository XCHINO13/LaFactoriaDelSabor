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
    return this.http.post<any>(`${environment.url}user/registrarReserva`, reserva, this.headers);
  }
}
