import { Suspense, useRef, useState } from "react";
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

  // 👇 add Leva controls for the point light position
  // const pointLightPosition = useControls("Point Light", {
  //   x: { value: -1.6, min: -10, max: 10, step: 0.01 },
  //   y: { value: -6.2, min: -10, max: 10, step: 0.01 },
  //   z: { value: -1.81, min: -10, max: 10, step: 0.01 },
  // });

  const pointLightPosition = useControls("Point Light", {
    x: { value: 8.262, min: -10, max: 10, step: 0.01 },
    y: { value: 11.795, min: -10, max: 10, step: 0.01 },
    z: { value: -3.59, min: -10, max: 10, step: 0.01 },
  });

  // 👇 add Leva control to toggle the point light helper visibility
  const { showHelper } = useControls({
    showHelper: { value: false, label: "Show Point Light Helper" },
  });

  // 👇 only add the helper when showHelper is true
  useHelper(showHelper ? pointLightRef : null, PointLightHelper, 1, "hotpink");

  useFrame(() => {
    if (goal && controlsRef.current) {
      camera.position.lerp(goal.position, 0.05);
      controlsRef.current.target.lerp(goal.target, 0.05);
      controlsRef.current.update();

      if (camera.position.distanceTo(goal.position) < 0.1) {
        setGoal(null);
      }
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
            pointLightPosition.x,
            pointLightPosition.y,
            pointLightPosition.z,
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
