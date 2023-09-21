import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform } from '@angular/core';
import * as THREE from 'three';

const scene = new THREE.Scene();

// Configurar la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Configurar el renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Agregar un cubo a la escena
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css'],  
})
export class HomeMenuComponent implements OnInit {
  idiom = 'Español';

  constructor(public translate: TranslateService) {
    translate.addLangs(['Ingles', 'Español']);
    translate.setDefaultLang('Español');
    translate.use(this.idiom);
  }

  ngOnInit(): void {
    this.animate();
  }

  switchLang = (lang: string) => {
    if (lang !== 'Español') {
      this.idiom = 'Ingles';
      this.translate.use(this.idiom);
    } else {
      this.idiom = 'Español';
      this.translate.use(this.idiom);
    }
  };



   animate() {
    requestAnimationFrame(this.animate);
    
  
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
  
    renderer.render(scene, camera);
  }
}
