import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Model from "./Model.jsx";
import Placeholder from "./Placeholder.jsx";
import { useControls } from "leva";

export default function Experience() {
  const { target } = useControls("OrbitControls", {
    target: {
      value: [0, 10, 0],
      step: 0.1,
      min: -10,
      max: 10,
    },
  });

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls target={target} makeDefault 
        minPolarAngle={2}
        maxPolarAngle={2}
        // minDistance={5}
        // maxDistance={5}
        enablePan={false}
        enableZoom={false}
      />

      <directionalLight
        // shadow-bias={-0.00005}
        // shadow-normalBias={0.02}
        castShadow
        position={[1, 2, 3]}
        intensity={4.5}
      />
      <ambientLight intensity={1.5} />

      {/* <mesh receiveShadow>
        <cylinderGeometry args={[3, 3, 0, 32]} />
        <meshStandardMaterial color="white" />
      </mesh> */}

      <Suspense fallback={<Placeholder />}>
        <Model />
      </Suspense>
    </>
  );
}
