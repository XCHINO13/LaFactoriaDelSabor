import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() { }

  private validarLogin = new BehaviorSubject<boolean>(false);
  public validarLogin$ = this.validarLogin.asObservable();

  buttonLogout() {
    this.validarLogin.next(true);
  }
}
