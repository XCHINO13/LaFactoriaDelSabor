import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public datos = {
    "email":"admin@gmail.com",
    "password":"admin"
}

  constructor(private http: HttpClient) { }

  public respuesta = { headers: new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*')}


  public login() {
    return this.http.post("http://localhost:7000/user/login", this.datos, this.respuesta);
  }
  
}
