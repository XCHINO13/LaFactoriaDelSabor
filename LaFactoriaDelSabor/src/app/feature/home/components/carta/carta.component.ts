import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {
    this.createThreeJsBox();
  }

  createThreeJsBox(): void {
    const canvas = document.getElementById('canvas-box');

    const scene = new THREE.Scene();

    // const material = new THREE.MeshToonMaterial();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.x = 2;
    pointLight.position.y = 2;
    pointLight.position.z = 2;
    scene.add(pointLight);

    const canvasSizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const camera = new THREE.PerspectiveCamera(
      100,
      canvasSizes.width / canvasSizes.height,
      0.001,
      100
    );

    //  COM posicion de la camara
    // camera.position.z = 10;
    camera.position.set(0, 5, 12);

    // Actualiza la vista
    camera.updateProjectionMatrix();
    scene.add(camera);

    if (!canvas) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setClearColor(0xffffff, 1);
    renderer.setSize(canvasSizes.width, canvasSizes.height);

    const loader = new GLTFLoader();

    let modelo: any;

    loader.load('assets/animations/pudding.gltf', (gltf) => {
      modelo = gltf.scene;
      scene.add(gltf.scene);
      animate();
    });

    function animate() {
      // Rotación automática
      modelo.rotation.y += 0.01; // Ajusta la velocidad según tus preferencias

      // Renderiza la escena
      renderer.render(scene, camera);

      // Llama a animate de nuevo en el siguiente cuadro de animación
      requestAnimationFrame(animate);
    }
  }
}
