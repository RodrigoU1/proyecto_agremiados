import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Agremiado from 'src/app/interfaces/agremiados.interface';
import { AgremiadosService } from 'src/app/service/agremiados.service';

@Component({
  selector: 'app-lista-agremiados',
  templateUrl: './lista-agremiados.component.html',
  styleUrls: ['./lista-agremiados.component.css']
})
export class ListaAgremiadosComponent {

 agremis: Agremiado [] = [];

  constructor(
    private fb : FormBuilder,
    private router: Router,
  ){}

//   ngOnInit(): any {
//     this.agremiService.getAgremiado().subscribe(agrem => {
//       console.log(agrem);
//       this.agremis = agrem;
//     });
// }

}
