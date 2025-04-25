import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Model } from "./Model.jsx";
import Placeholder from "./Placeholder.jsx";
import { useControls } from "leva";
import { Center, Sparkles, useHelper, Bvh } from "@react-three/drei";
import { DirectionalLightHelper } from "three";
import { useRef } from "react";

export default function Experience() {
  const { position, intensity, color } = useControls("DirectionalLight", {
    position: {
      value: [1, 20, 3],
      step: 0.1,
      min: -10,
      max: 10,
    },
    intensity: {
      value: 4.5,
      step: 0.1,
      min: 0,
      max: 10,
    },
    color: {
      value: "#79AFFF",
      step: 0.1,
      min: 0,
      max: 10,
    },
  });

  const onClick = (e) => {
    e.stopPropagation();
    console.log("click");
  };

  const dirLightRef = useRef();
  useHelper(dirLightRef, DirectionalLightHelper, 1, color);

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
          // minDistance={5}
          // maxDistance={5}
          enablePan={false}
          enableZoom={false}
          position={[0, 10, 10]}
        />

        <directionalLight
          shadow-bias={-0.00005}
          shadow-normalBias={0.02}
          ref={dirLightRef}
          castShadow
          position={position}
          intensity={intensity}
          color={color}
        />

        {/* <pointLight
        castShadow
        position={pointLightPosition}
        intensity={100}
        color={"#68ffd1"}
      /> */}

        <pointLight
          castShadow
          position={[0, 10, 0]}
          intensity={10}
          color={"#68ffd1"}
        />

        <ambientLight intensity={0.25} color={color} position={[10, 10, 10]} />

        {/* <mesh receiveShadow>
        <cylinderGeometry args={[3, 3, 0, 32]} />
        <meshStandardMaterial color="white" />
      </mesh> */}

        <Suspense fallback={<Placeholder />}>
          <Model onClick={onClick} />
        </Suspense>
      </Bvh>
    </>
  );
}
