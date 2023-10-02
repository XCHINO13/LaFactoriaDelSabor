import { FormGroup } from '@angular/forms';

export class UtilFiltros {

  static valorInput(campo?: string, value?: any, formGroup?: FormGroup): void {
    formGroup!.get(campo!)!.setValue(value!);
  }

}
