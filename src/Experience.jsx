import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Model } from "./Model.jsx";
import Placeholder from "./Placeholder.jsx";
import { Center, Sparkles, Bvh } from "@react-three/drei";

export default function Experience() {
  const onClick = (e) => {
    e.stopPropagation();
    console.log("click");
  };

  return (
    <>
      <Bvh>
        {/* <Perf position="top-left" /> */}
        <Center>
          <Sparkles
            count={50}
            size={4}
            scale={30}
            color={"#68ffd1"}
            position-y={1}
          />
        </Center>

        <OrbitControls
          makeDefault
          minPolarAngle={2}
          maxPolarAngle={2}
          // enablePan={false}
          // enableZoom={false}
          position={[0, 10, 10]}
        />

        <directionalLight
          shadow-bias={-0.00005}
          shadow-normalBias={0.02}
          castShadow
          position={[1, 20, 3]}
          intensity={4.5}
          color={"#79AFFF"}
        />

        <pointLight
          castShadow
          position={[0, 10, 0]}
          intensity={10}
          color={"#68ffd1"}
        />

        <ambientLight intensity={0.25} color={"#79AFFF"} position={[10, 10, 10]} />
        <Suspense fallback={<Placeholder />}>
          <Model onClick={onClick} />
        </Suspense>
      </Bvh>
    </>
  );
}
