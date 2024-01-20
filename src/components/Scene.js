import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import Cube from './Cube';
const Scene = () => {
    return (
        <Canvas className='canvas' camera={{position: [1.0,1.0,1.0], fov: 75}}>
            <Cube />
            <axesHelper />
            <OrbitControls />
        </Canvas>
    );
}

export default Scene;
