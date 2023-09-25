import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-informativo',
  templateUrl: './titulo-informativo.component.html',
  styleUrls: ['./titulo-informativo.component.css']
})
export class TituloInformativoComponent implements OnInit {

  @Input() titulo?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
