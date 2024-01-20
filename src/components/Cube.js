import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { fragmentShader, vertexShader } from './FragmentVertex';

const Cube = () => {
    
    const mesh = useRef()
    const uniform = useMemo(()=>{
        return (
            {
                u_time: {
                    value: 0.0
                },
                u_colorA: {
                    value: new THREE.Color("#36bc6c")
                },
                u_colorB: {
                    value: new THREE.Color("#2b5fe2")
                }
            }
        )
    },[]);

    useFrame((state)=>{
        //  console.log(state);
        const { clock } = state;
        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    })

    return (
        <mesh ref={mesh} position={[0, 0, 0]}  rotation={[-Math.PI / 2, 0, 0]} scale={1.5} >
            <planeGeometry args={[1, 1, 16, 16]} />
            <shaderMaterial fragmentShader={fragmentShader} vertexShader={vertexShader} uniforms={uniform}  />
        </mesh>
    );
}

export default Cube;
