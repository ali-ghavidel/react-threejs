export const vertexShader = `
uniform float u_time;
varying float vZ;

void main() {

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(modelPosition.x * 5.0 + u_time * 3.0) * 0.1;
    modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;

    vZ = modelPosition.y;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}
`;
export const fragmentShader = `
uniform vec3 u_colorA;
uniform vec3 u_colorB;
varying float vZ;

void main() {

    // vec2 normalizedPixel = gl_FragCoord.xy/600.0;
    vec3 color = mix(u_colorA,u_colorB, vZ * 4.0 + 0.5);

    gl_FragColor = vec4(color , 1.0);
  }
`;
