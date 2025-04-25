import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
  ToneMapping,
} from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";

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
        <ToneMapping
          adaptive
          resolution={256}
          middleGrey={0.4}
          maxLuminance={10}
          minLuminance={0.01}
          averageLuminance={0.1}
          luminanceSmoothing={0.9}
          exposure={0.5}
          mode={ToneMappingMode.NEUTRAL}
          // toneMapping={1}
          // toneMappingExposure={1}
          // toneMappingWhitePoint={1}
          // toneMappingType={0}
          // toneMappingOperator={0}
          // toneMappingOperatorType={0}
          // toneMappingOperatorExposure={1}
          // toneMappingOperatorWhitePoint={1}
          // toneMappingOperatorGamma={1}
          // toneMappingOperatorSaturation={1}
          // toneMappingOperatorContrast={1}
          // toneMappingOperatorBrightness={1}
          // toneMappingOperatorHue={1}
          // toneMappingOperatorLightness={1}
          // toneMappingOperatorLightnessSaturation={1}
        />
      </EffectComposer>
    </Canvas>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
