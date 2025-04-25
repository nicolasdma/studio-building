import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { useControls } from "leva";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

const CameraController = ({ cameraSettings }) => {
  const { camera } = useThree();
  console.log(cameraSettings);
  useEffect(() => {
    camera.fov = cameraSettings.fov;
    camera.near = cameraSettings.near;
    camera.far = cameraSettings.far;
    camera.zoom = cameraSettings.zoom;
    camera.position.set(...cameraSettings.position);
    camera.rotation.set(...cameraSettings.rotation);
    camera.updateProjectionMatrix();
  }, [cameraSettings]);

  return null;
};

const App = () => {
  const camera = useControls("Camera", {
    fov: {
      value: 100,
      min: 1,
      max: 100,
      step: 1,
    },
    near: {
      value: 0.1,
      min: 0.01,
      max: 10,
      step: 0.01,
    },
    far: {
      value: 200,
      min: 10,
      max: 500,
      step: 1,
    },
    position: {
      value: [11, 3, 10],
      step: 0.1,
    },
    rotation: {
      value: [0, 0, 0],
      step: 0.1,
      min: -Math.PI,
      max: Math.PI,
    },
    zoom: {
      value: 0.8,
      min: 0.1,
      max: 10,
      step: 0.1,
    },
  });

  const fog = useControls("Fog", {
    color: {
      value: "#0f1a2a",
    },
    near: {
      value: 10,
      step: 0.1,
      min: 0,
      max: 20,
    },
    far: {
      value: 20,
      step: 0.1,
      min: 10,
      max: 50,
    },
  });

  return (
    <Canvas
      shadows
      flat
      camera={{
        fov: camera.fov,
        near: camera.near,
        far: camera.far,
        position: camera.position,
        // rotation: camera.rotation,
        zoom: camera.zoom,
      }}
    >
      <color attach="background" args={["black"]} />
      <fog attach="fog" args={[fog.color, fog.near, fog.far]} />

      <ambientLight intensity={1} />
      <pointLight position={[5, 5, 5]} intensity={5} color="#b4f8c8" />
      <pointLight position={[-5, -5, 5]} intensity={10} color="#94d2bd" />

      <CameraController cameraSettings={camera} />
      <Experience />

      <EffectComposer>
        <Bloom
          intensity={0.25}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
        <Noise opacity={0.04} />
        <Vignette eskil={false} offset={0.1} darkness={1.2} />
      </EffectComposer>
    </Canvas>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
