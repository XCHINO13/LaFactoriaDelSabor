import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';
import { PlatosService } from 'src/app/core/services/platos.service';
import { SubSink } from 'subsink';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css'],
})
export class CartaComponent implements OnInit {

  private subs = new SubSink();
  // public platos: any;
  public usuario: any;

  constructor(private platosService: PlatosService) {}

  public platos = [
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
    {
      img: './assets/img/fondoComida.jpg',
      nombre: 'Pollo a la plancha',
      descripcion:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est consequuntur.',
      precio: '$ 25.000',
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
      img: './assets/img/creps.jfif',
      nombre: 'Creps',
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
    {
      img: './assets/img/fondoComida.jpg',
      nombre: 'Pollo a la plancha',
      descripcion:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est consequuntur.',
      precio: '$ 25.000',
    },
  ];

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario')!);


    this.consultarTodosPlatos();
    

  }

  consultarTodosPlatos() {
    this.subs.add(this.platosService.consultartodosPlatos().subscribe(resp => {
      console.log('TODOS LOS PLATOS');
      console.log(resp);
      if(resp.status === 200) {
        this.platos = resp.data;
      }
    }))
  }
  
  consultarPlatosPorEmpresa(id_empresa: number) {
    this.subs.add(this.platosService.consultartodosPlatos().subscribe(resp => {
      console.log('PLATOS POR EMPRESA');
      console.log(resp);
      if(resp.status === 200) {
        this.platos = resp.data;
      }
    }))
  }


}
