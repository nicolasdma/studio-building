import { Suspense } from "react";
import { OrbitControls, Bvh, Center } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Model } from "../Model.jsx";
import Placeholder from "../Placeholder.jsx";
import Lights from "./Lights.jsx";
import Effects from "./Effects.jsx";

export default function Experience() {
  const onClick = (e) => {
    e.stopPropagation();
    console.log("click");
  };

  return (
    <Bvh>
      <Perf position="top-left" />
      <Center>
        <Effects />
      </Center>

      <OrbitControls
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
        <Model onClick={onClick} />
      </Suspense>
    </Bvh>
  );
}
