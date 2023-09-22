import { Injectable } from '@angular/core';
// COM SweetAlert2
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  alertExitoso(tite: string) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: tite,
      showConfirmButton: false,
      timer: 1500
    })
  }
  
  alertFracaso(tite: string) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: tite,
      showConfirmButton: false,
      timer: 1500
    })
  }
}
