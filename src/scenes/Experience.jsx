import { Suspense, useRef, useState, useEffect } from "react";
import { OrbitControls, Bvh, Center, useHelper } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Model from "../Model.jsx";
import Placeholder from "../Placeholder.jsx";
import Lights from "./Lights.jsx";
import Effects from "./Effects.jsx";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import WindowShaders from "../WindowShaders.jsx";
import { useControls } from "leva"; // 👈 import leva
import { PointLightHelper } from "three";

export default function Experience() {
  const { camera } = useThree();
  const controlsRef = useRef();
  const pointLightRef = useRef();
  const [goal, setGoal] = useState(null);
  const [isShadowCalculated, setIsShadowCalculated] = useState(false);



  // 👇 Only calculate shadows in the first frame
  useEffect(() => {
    if (!isShadowCalculated) {
      const light = pointLightRef.current;
      if (light) {
        light.castShadow = true; // Enable shadow calculation on first frame
      }
      setIsShadowCalculated(true); // Mark as calculated
    }
  }, [isShadowCalculated]);

  useFrame(() => {
    if (goal && controlsRef.current) {
      camera.position.lerp(goal.position, 0.05);
      controlsRef.current.target.lerp(goal.target, 0.05);
      controlsRef.current.update();

      if (camera.position.distanceTo(goal.position) < 0.1) {
        setGoal(null);
      }
    }

    // Disable shadows after the first frame calculation
    if (isShadowCalculated && pointLightRef.current) {
      pointLightRef.current.castShadow = false; // Disable shadow updates after first frame
    }
  });

  const moveTo = (e, camPosition, camRotation) => {
    const { object } = e;
    const bbox = new THREE.Box3().setFromObject(object);
    const center = new THREE.Vector3();
    bbox.getCenter(center);

    const direction = new THREE.Vector3(0, 0, 0.25);
    const size = bbox.getSize(new THREE.Vector3()).length();
    const distance = Math.max(4, size * 1.5);
    const position = center.clone().add(direction.multiplyScalar(distance));

    setGoal({
      position,
      target: center,
    });

    if (controlsRef.current) {
      controlsRef.current.target.copy(center);
      camera.lookAt(center);
      controlsRef.current.update();
    }
  };

  return (
    <Bvh>
      <Center>
        <Effects />
      </Center>
      <Perf position="top-left" />

      <OrbitControls
        ref={controlsRef}
        makeDefault
        minPolarAngle={2}
        maxPolarAngle={2}
        enablePan={false}
        enableZoom={false}
      />

      <Lights />

      <ambientLight intensity={0.25} color={"#79AFFF"} />

      <pointLight
        ref={pointLightRef}
        intensity={1000}
        color={"#68FFD1"}
        position={[-3.1, -6.8, -0.6]}
        castShadow
        shadow-mapSize-width={2048} // Aumenta la resolución de la sombra
        shadow-mapSize-height={2048}
        shadow-radius={4}
      />
      <group dispose={null} rotation={[0, Math.PI / 7, 0]}>
        <pointLight
          ref={pointLightRef}
          intensity={50}
          color={"#FFBB59FF"}
          position={[
            8.26,
            10.00,
            -3.59,
          ]}
          castShadow
        />

        <pointLight
          ref={pointLightRef}
          intensity={5}
          color={"#FFBB59FF"}
          position={[-4.49, -5.72, -8.48]}
          castShadow
        />
      </group>
      <Suspense fallback={<Placeholder />}>
        <Center>
          <Model />
          <WindowShaders />
        </Center>
      </Suspense>
    </Bvh>
  );
}
