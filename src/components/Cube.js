import React, { useRef } from 'react';


const vertexShader = `
void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(modelPosition.x * 4.0) * 0.2;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}
`;
const fragmentShader = `
void main() {
    gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
  }
`;

const Cube = () => {
    
    const mesh = useRef()
    return (
        <mesh ref={mesh} position={[0,0,0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.5} >
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} wireframe />
        </mesh>
    );
}

export default Cube;
