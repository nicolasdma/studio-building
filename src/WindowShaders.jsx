import React from "react";
import { shaderMaterial, Center, meshBounds, useGLTF } from "@react-three/drei";
import portalVertexShader from "./shaders/vertex.glsl";
import portalFragmentShader from "./shaders/fragment.glsl";
import { useFrame, extend, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("#92FDDB"),
    uColorEnd: new THREE.Color("#FEAAB6"),
  },
  portalVertexShader,
  portalFragmentShader
);

extend({ PortalMaterial });

const WindowShaders = () => {
  const { nodes, materials } = useGLTF("/building-unwraping-merged-2.glb");
  // const [position, setPosition] = React.useState([0, 0, 0]);

  const portalMaterial = useRef();
  const upperWindowMaterial = useRef();
  const squareWindowMaterial = useRef();

  useFrame((state, delta) => {
    portalMaterial.current.uTime += delta * 1.2;
    upperWindowMaterial.current.uTime += delta * 1.4;
    squareWindowMaterial.current.uTime += delta * 1.6;

    // console.log(camera.position);
  });

  return (
    // <group dispose={null} rotation={[0, Math.PI / 7, 0]}>
    <group dispose={null}>
      <mesh
        geometry={new THREE.PlaneGeometry(3, 3)}
        position={[7.75, 2.47, -4.5]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <portalMaterial ref={squareWindowMaterial} />
      </mesh>
      <mesh
        geometry={new THREE.PlaneGeometry(3, 4)}
        position={[7.53, 2.45, -1.6]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <portalMaterial ref={upperWindowMaterial} />
      </mesh>
      <mesh
        geometry={new THREE.PlaneGeometry(2.5, 2)}
        position={[7.54, 0.4, -1.6]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <portalMaterial ref={portalMaterial} />
      </mesh>
    </group>
  );
};

export default WindowShaders;
