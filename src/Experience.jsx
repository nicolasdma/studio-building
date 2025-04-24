import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Model from "./Model.jsx";
import Placeholder from "./Placeholder.jsx";

export default function Experience() {
  
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls target={[0, 3, 0]} makeDefault />

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
