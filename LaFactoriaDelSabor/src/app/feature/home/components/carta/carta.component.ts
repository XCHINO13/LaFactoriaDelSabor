import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css'],
})
export class CartaComponent implements OnInit {
  platos = [
    {
      img: './assets/img/hm.jfif',
      nombre: 'Hamburguesa',
      descripcion:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est consequuntur.',
      precio: '$ 15.000',
    },
    {
      img: './assets/img/creps.jfif',
      nombre: 'Creps',
      descripcion:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est consequuntur.',
      precio: '$ 25.000',
    },
    {
      img: './assets/img/br.jfif',
      nombre: 'Burrito',
      descripcion:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est consequuntur.',
      precio: '$ 25.000',
    },
    {
      img: './assets/img/fondoComida.jpg',
      nombre: 'Pollo a la plancha',
      descripcion:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est consequuntur.',
      precio: '$ 25.000',
    },
  ];

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
  }

  consulta() {
  }


}
