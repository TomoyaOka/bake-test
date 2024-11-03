import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Fragment, Vertex } from "../shader/Shader";
import { gsap } from "gsap";
export default class Model {
  constructor(stage) {
    this.stage = stage;
    this.mobile = "ontouchstart" in document.documentElement;
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.gltfLoader = new GLTFLoader();
  }

  _init(val) {
    this.createModel(val);
  }

  getModel() {
    return new Promise((resolve, reject) => {
      const url = "/box.glb";
      this.gltfLoader.load(url, (data) => {
        const result = data;
        resolve(result);
      });
    });
  }

  setModel(val) {
    const loader = new THREE.TextureLoader();
    const texture = loader.load("/0_Cube_BSDFPASS.jpg", function (texture) {
      // texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    });
    // const normalMap = loader.load("/0_Cube_NORMAL.png");
    // const roughnessMap = loader.load("/0_Cube_ROUGH.png");
    // const ambientOcclusionMap = loader.load("/0_Cube_AO.png");

    const mat = new THREE.MeshStandardMaterial({
      map: texture,
      // side: THREE.DoubleSide,
      // normalMap: normalMap,
      // roughnessMap: roughnessMap,
      // roughness: 0.5,
      // aoMap: ambientOcclusionMap,
      // aoMapIntensity: 1,
      // side: THREE.FrontSide,
      // transparent: true,
      // alphaTest: 0.5,
    });

    this.body = val.scene;
    this.body.children[0].material = mat;

    return this.body;
  }

  createModel(val) {
    const meshBody = this.setModel(val);
    meshBody.scale.set(0.3, 0.3, 0.3);
    // meshBody.rotation.x = 0.4;

    this.stage.scene.add(meshBody);
  }

  onResize() {}

  onUpdata() {}
}
