export const Vertex = /* glsl */ `
varying vec2 vUv;
void main() {
   vUv = uv;
   gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;

export const Fragment = /* glsl */ `
precision mediump float;
void main() {
      gl_FragColor = vec4(0.2, 0.0, 0.0, 1.0);
    }
`;
