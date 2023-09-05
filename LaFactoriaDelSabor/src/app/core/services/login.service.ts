import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


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

  public login(): Observable<any> {
    return this.http.post<any>(`${environment.url}user/login`, this.params, this.headers);
  }
  
}
