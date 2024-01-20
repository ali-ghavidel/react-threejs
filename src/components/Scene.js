import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import Cube from './Cube';
const Scene = ({start}) => {
    return (
        <Canvas className='canvas' camera={{position: [1.0,1.0,1.0], fov: 75}}>
            <Cube start={start} />
            <axesHelper />
            <OrbitControls />
        </Canvas>
    );
}

export default Scene;
