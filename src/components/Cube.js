import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber'

const vertexShader = `
uniform float u_time;
varying vec2 vUv;
void main() {
    vUv = uv;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(modelPosition.x * 4.0 + u_time * 2.0) * 0.2;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}
`;
const fragmentShader = `

varying vec2 vUv;

vec3 colorA = vec3(1.0,1.0,0.052);
vec3 colorB = vec3(0.400,0.0,1.0);

void main() {

    vec2 normalizedPixel = gl_FragCoord.xy/400.0;
    vec3 color = mix(colorA, colorB, normalizedPixel.y);

    gl_FragColor = vec4(color , 1.0);
  }
`;

const Cube = ({start}) => {
    
    const mesh = useRef()
    const uniform = useMemo(()=>{
        return (
            {
                u_time: {
                    value: 0.0
                }
            }
        )
    },[]);

    useFrame((state)=>{
        //  console.log(state);
        const { clock } = state;
        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
        clock.running = start;
    })

    return (
        <mesh ref={mesh} position={[0, 0, 0]}  rotation={[-Math.PI / 2, 0, 0]} scale={1.5} >
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniform} wireframe />
        </mesh>
    );
}

export default Cube;
