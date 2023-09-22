import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  AfterViewInit,
} from '@angular/core';
import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


@Component({
  selector: 'app-threejs',
  templateUrl: './threejs.component.html',
  styleUrls: ['./threejs.component.css'],
})
export class ThreejsComponent implements OnInit, AfterViewInit {
  // @ViewChild('canvas') private canvasRef!: ElementRef;

  // @Input() public rotationSpeedX: number = 0.05;
  // @Input() public rotationSpeedY: number = 0.01;
  // @Input() public size: number = 200;
  // @Input() public texture: string = '/assets/img/fondoComida.jpg';

  // @Input() public camaraZ: number = 400;
  // @Input() public fieldOfView: number = 1;
  // @Input('nearClipping') public nearClipping: number = 1;
  // @Input('farClipping') public farClipping: number = 1000;

  // private camera!: THREE.PerspectiveCamera;

  // private get canvas(): HTMLCanvasElement {
  //   return this.canvasRef.nativeElement;
  // }

  // private loader = new THREE.TextureLoader();
  // private geometry = new THREE.BoxGeometry();
  // private material = new THREE.MeshBasicMaterial({ map: this.loader.load(this.texture) });

  // private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);

  // private render!: THREE.WebGLRenderer;

  // private scene!: THREE.Scene;

  // private createSene(){
  //   this.scene = new THREE.Scene();
  //   this.scene.background = new THREE.Color(0x000000);
  //   this.scene.add(this.cube);

  //   let aspectoRatio = this.getAspectRatio();
  //   this.camera = new THREE.PerspectiveCamera(
  //     this.fieldOfView,
  //     aspectoRatio,
  //     this.nearClipping,
  //     this.farClipping
  //   )
  //   this.camera.position.z = this.camaraZ;
  // }

  // private getAspectRatio() {
  //   return this.canvas.clientWidth / this.canvas.clientHeight;
  // }

  // private animateCube() {
  //   this.cube.rotation.x += this.rotationSpeedX;
  //   this.cube.rotation.y += this.rotationSpeedY;
  // }

  // private startRenderLoop() {
  //   this.render = new THREE.WebGLRenderer({ canvas: this.canvas });
  //   this.render.setPixelRatio(devicePixelRatio);
  //   this.render.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

  //   let component: ThreejsComponent = this;
  //   (function render() {
  //     requestAnimationFrame(render);
  //     component.animateCube();
  //     component.render.render(component.scene, component.camera)
  //   })
  // }

  // COM modelos 3d
  // private loader = new GLTFLoader();

  constructor() {}
  ngAfterViewInit(): void {
    // this.createSene();
    // this.startRenderLoop();
  }

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

    // const box = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), material);

    // const torus = new THREE.Mesh(
    //   new THREE.TorusGeometry(8, 2, 10000, 50),
    //   material
    // );

    // scene.add(torus, box);
    // scene.add(torus);

    const canvasSizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const camera = new THREE.PerspectiveCamera(
      50,
      canvasSizes.width / canvasSizes.height,
      0.001,
      100
    );

    //  COM posicion de la camara
    camera.position.z = 15;
    scene.add(camera);

    if (!canvas) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setClearColor(0x34ffff, 1);
    renderer.setSize(canvasSizes.width, canvasSizes.height);

  
    // ----------- COM Fondo estatico a la pantalla ------------
    // window.addEventListener('resize', () => {
    //   canvasSizes.width = window.innerWidth;
    //   canvasSizes.height = window.innerHeight;

    //   camera.aspect = canvasSizes.width / canvasSizes.height;
    //   camera.updateProjectionMatrix();

    //   renderer.setSize(canvasSizes.width, canvasSizes.height);
    //   renderer.render(scene, camera);
    // });

    // const clock = new THREE.Clock();

    // const animateGeometry = () => {
      // const elapsedTime = clock.getElapsedTime();

      // Update animation objects
      // box.rotation.x = elapsedTime;
      // box.rotation.y = elapsedTime;
      // box.rotation.z = elapsedTime;

      // torus.rotation.x = -elapsedTime;
      // torus.rotation.y = -elapsedTime;
      // torus.rotation.z = -elapsedTime;

      // Render
      // renderer.render(scene, camera);

      // Call animateGeometry again on the next frame
      // window.requestAnimationFrame(animateGeometry);
    // };

    // const loader = new GLTFLoader();

    // loader.load(
    //   'assets/animations/foodies_copy.gltf',
    //   function (gltf) {
    //     scene.add(gltf.scene);
    //   },
    //   undefined,
    //   function (error) {
    //     console.error(error);
    //   }
    // );




    // COM -------------- Food --------------

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

    // animateGeometry();
  }
}
