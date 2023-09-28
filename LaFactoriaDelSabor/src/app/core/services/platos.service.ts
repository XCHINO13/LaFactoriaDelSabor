import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  constructor(private http: HttpClient) { }

  public headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public consultartodosPlatos(): Observable<any> {
    return this.http.get(`${environment.url}platos/consultarPlatos`, this.headers);
  }
  
  public platosPorEmpresa(id_empresa: number): Observable<any> {
    return this.http.post(`${environment.url}platos/platosPorEmpresa/${id_empresa}`, this.headers);
  }
}
