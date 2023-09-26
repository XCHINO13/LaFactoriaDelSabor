import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUsuario } from '../data/IUsuario';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public params = {
    correo:"admin@asd.com",
    contrasena:"admin"
}

  constructor(private http: HttpClient) { }

  public headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public login(usuario: IUsuario): Observable<any> {
    return this.http.post<IUsuario>(`${environment.url}user/login`, usuario, this.headers);
  }
  
  public register(usuario: IUsuario): Observable<any> {
    return this.http.post<IUsuario>(`${environment.url}user/register`, usuario, this.headers);
  }
  
}
