import { Suspense, useRef, useState } from "react";
import { OrbitControls, Bvh, Center } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Model } from "../Model.jsx";
import Placeholder from "../Placeholder.jsx";
import Lights from "./Lights.jsx";
import Effects from "./Effects.jsx";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Experience() {
  const { camera } = useThree();
  const controlsRef = useRef();
  const [goal, setGoal] = useState(null);
  
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

  const moveTo = (e) => {
    console.log("Moving to:", e.point);
    setGoal({
      position: e.point.clone(),
      target: e.point.clone()
    });
  };

  return (
    <Bvh>
      <Center>
        <Effects />
      </Center>

      <OrbitControls
        ref={controlsRef}
        makeDefault
        minPolarAngle={2}
        maxPolarAngle={2}
        enablePan={false}
        enableZoom={false}
      />

      <Lights />

      <ambientLight
        intensity={0.25}
        color={"#79AFFF"}
        position={[10, 10, 10]}
      />

      <Suspense fallback={<Placeholder />}>
        <Model onClick={moveTo} />
      </Suspense>
    </Bvh>
  );
}
