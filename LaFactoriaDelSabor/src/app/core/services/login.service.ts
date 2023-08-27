import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public datos: any = {
    "name": "jhonierasdasa",
    "contactNumber": "321775542884",
    "email": "myjhsder@gmail.com",
    "password": "112233"
}

  constructor(private http: HttpClient) { }


  public login() {
    return this.http.post('localhost:7000/user/signup', this.datos);
  }

}
