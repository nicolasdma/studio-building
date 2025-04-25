import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

const App = () => {
  return (
    <Canvas
      shadows
      flat
      camera={{
        fov: 100,
        near: 0.1,
        far: 200,
        position: [11, 3, 10],
        zoom: 0.8,
      }}
    >
      <color attach="background" args={["black"]} />
      <fog attach="fog" args={["#0f1a2a", 10, 19]} />

      <ambientLight intensity={1} />
      <pointLight position={[5, 5, 5]} intensity={5} color="#b4f8c8" />
      <pointLight position={[-5, -5, 5]} intensity={10} color="#94d2bd" />

      <Experience />

      <EffectComposer>
        <Bloom
          intensity={0.2}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
         {/* <Noise opacity={0.04} /> */}
        <Vignette eskil={false} offset={0} darkness={1.2} />
      </EffectComposer>
    </Canvas>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
