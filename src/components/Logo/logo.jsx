import React, { useRef, useState } from "react";
import { useFrame } from 'react-three-fiber';
import { useControl } from 'react-three-gui';
import logo from "../../assets/images/logo-aLDev.png";

const Logo = () => {

    const meshRef = useRef()
    const rotation = useControl('Rotation', { type: 'number' })
    const [rotX, setRotX] = useState(0)
    const [rotY, setRotY] = useState(0)

    useFrame((state, delta, object) => {
        setRotX(rotX => rotX + rotation * delta);
        setRotY(rotY => rotY + rotation * delta);
        object.rotation.x = rotX
        object.rotation.y = rotY
    }, 1, meshRef)

    
    
    return (
        <mesh ref={meshRef}>
        <planeBufferGeometry />
        <meshStandardMaterial map={logo} />
        </mesh>
    )
}

export default Logo;