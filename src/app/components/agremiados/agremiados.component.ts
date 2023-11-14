import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgremiadosService } from 'src/app/service/agremiados.service';

@Component({
  selector: 'app-agremiados',
  templateUrl: './agremiados.component.html',
  styleUrls: ['./agremiados.component.css']
})
export class AgremiadosComponent {

  constructor(
    private fb : FormBuilder,
    // private agremiado: AgremiadosService,

  ){}

  formAgremi: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    nue: ['', Validators.required],
    password: ['', Validators.required],
    rol: ['', Validators.required],
  })

  // save() {
  //   this.agremiado.guardarAgremiado(
  //   {
  //     id: new Date().getTime().toString(),
  //     ...this.formAgremi.value
  //   } as any);
  //   console.log('Guardado', this.formAgremi.value);

  // }

}
