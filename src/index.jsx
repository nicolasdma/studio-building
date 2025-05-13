// App.jsx
import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./scenes/Experience.jsx";
import {
  EffectComposer,
  Bloom,
  Vignette,
  ToneMapping,
  Glitch,
} from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";
import { useRef } from "react";
import AudioZoneController from "./utils/AudioZoneController.jsx";
import useUnlockAudio from "./hooks/useUnlockAudio.js";
import { Html } from "@react-three/drei";

const styles = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    textAlign: "center",
  },
  header: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  progressBarContainer: {
    width: "80%",
    height: "20px",
    backgroundColor: "#555",
    borderRadius: "10px",
    margin: "0.5rem auto",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#4caf50",
    borderRadius: "10px",
    transition: "width 0.1s ease-in-out",
  },
  percentage: {
    fontSize: "1.5rem",
    marginTop: "0.5rem",
  },
};

const App = () => {
  const audioRefs = {
    ambient: useRef(null),
    nightClub: useRef(null),
    factory: useRef(null),
    lab: useRef(null),
    food: useRef(null),
  };

  useUnlockAudio(Object.values(audioRefs));

  const audioZones = [
    { target: { x: 12.14, z: -5 }, range: 10, ref: audioRefs.nightClub },
    { target: { x: -13, z: 0 }, range: 10, ref: audioRefs.factory },
    { target: { x: 3, z: 11 }, range: 10, ref: audioRefs.lab, maxVolume: 0.6 },
    {
      target: { x: -6, z: -12.5 },
      range: 10,
      ref: audioRefs.food,
      maxVolume: 0.4,
    },
    {
      target: { x: 0, z: 0 },
      range: 30,
      ref: audioRefs.ambient,
      maxVolume: 0.2,
    },
  ];

  return (
    <>
      <audio
        ref={audioRefs.ambient}
        src="./audio/ambient-4.mp3"
        loop
        preload="auto"
      />
      <audio
        ref={audioRefs.nightClub}
        src="./audio/night-club-2.mp3"
        loop
        preload="auto"
      />
      <audio
        ref={audioRefs.factory}
        src="./audio/factory.mp3"
        loop
        preload="auto"
      />
      <audio
        ref={audioRefs.lab}
        src="./audio/construction.mp3"
        loop
        preload="auto"
      />
      <audio ref={audioRefs.food} src="./audio/food.mp3" loop preload="auto" />

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

        {audioZones.map((zone, index) => (
          <AudioZoneController
            key={index}
            target={zone.target}
            range={zone.range}
            audioRef={zone.ref}
            maxVolume={zone.maxVolume}
          />
        ))}

        <EffectComposer>
          <Vignette eskil={false} offset={0} darkness={1.1} />
          <Bloom
            intensity={0.2}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
          <ToneMapping
            multisampling={0}
            adaptive
            resolution={256}
            middleGrey={0.4}
            maxLuminance={10}
            minLuminance={0.01}
            averageLuminance={0.1}
            luminanceSmoothing={0.9}
            exposure={0.5}
            mode={ToneMappingMode.NEUTRAL}
          />
          <Glitch
            delay={[0.1, 90]}
            duration={[0.1, 0.3]}
            strength={[0.05, 0.2]}
            active={true}
            ratio={0.5}
          />
        </EffectComposer>
      </Canvas>
      <div
            style={{
              position: "absolute",
              bottom: "20px",
              width: "100vw",
              display: "flex",
              justifyContent: "center", 
            }}
          >

        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "1rem",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: "600",
            // border: "2px solid #4caf50",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.581)",
            // width: "max-content",
            minWidth: "200px",
            textAlign: "center",
            lineHeight: "1.5",
          }}
        >
          <span
            style={{
              fontSize: ".8rem",
              fontWeight: "600",
              letterSpacing: "1px",
              fontFamily: "Arial, sans-serif",
              color: "#4caf50",
            }}
          >
            🚧 Work in Progress 🚧
          </span>
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
