import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

export default class Stage {
  static get RENDERER_SETTING() {
    return {
      clearColor: 0x000000,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  static get CAMERA_PARAM() {
    return {
      fov: 60,
      fovy: 60,
      aspect: window.innerWidth / window.innerHeight,
      near: 0.1,
      far: 10000.0,
      x: 2.0,
      y: 1.0,
      z: 1.0,
      lookAt: new THREE.Vector3(0.0, 0.0, 0.0),
    };
  }

  constructor() {
    this.render;
    this.scene;
    this.canvas;
    this.controls;
    this.stats;
    this.axesHelper;
    this.gridHelper;
    this.mobile = "ontouchstart" in document.documentElement;
    this.render = this.render.bind(this);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.Dev = false;
    this.composer;
    this.loader = new THREE.TextureLoader();
  }

  _setRender() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setClearColor(0x111111, 1.0);
    this.renderer.setSize(Stage.RENDERER_SETTING.width, Stage.RENDERER_SETTING.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    // this.renderer.shadowMap.enabled = true;
    // this.renderer.physicallyCorrectLights = true;
    // this.renderer.outputEncoding = THREE.sRGBEncoding;
    // this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.canvas = document.querySelector("#canvas");
    this.canvas.appendChild(this.renderer.domElement);
  }

  _setScene() {
    this.scene = new THREE.Scene();
  }

  _setCamera() {
    this.camera = new THREE.PerspectiveCamera(Stage.CAMERA_PARAM.fovy, Stage.CAMERA_PARAM.aspect, Stage.CAMERA_PARAM.near, Stage.CAMERA_PARAM.far);
    this.camera.position.set(Stage.CAMERA_PARAM.x, Stage.CAMERA_PARAM.y, Stage.CAMERA_PARAM.z);
    this.camera.lookAt(Stage.CAMERA_PARAM.lookAt);
    this.camera.updateProjectionMatrix();
  }

  _setLight() {
    const light = new THREE.AmbientLight(0xffffff, 1.5);
    // const light02 = new THREE.DirectionalLight(0xffffff, 10);
    this.scene.add(light);
    // this.scene.add(light02);
  }

  _setStats() {
    //FPS表示
    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);
  }

  _setHelper() {
    //x,y.z軸表示
    this.axesHelper = new THREE.AxesHelper(1000);
    this.scene.add(this.axesHelper);

    //グリッド表示
    this.gridHelper = new THREE.GridHelper(10, 10);
    this.scene.add(this.gridHelper);

    //OrbitControls
    this.controls = new OrbitControls(this.camera, document.body);
  }

  _init() {
    this._setRender();
    this._setScene();
    this._setCamera();
    this._setLight();

    this._setHelper();
    // this._setStats();
  }

  render() {
    if (this.Dev) {
      this.stats.update();
      this.controls.update();
    }
    this.renderer.render(this.scene, this.camera);
  }

  onLoop() {
    this.render();
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }
}
