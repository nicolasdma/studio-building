import "./style.css";
import ReactDOM from "react-dom/client";
import { useFrame, useThree, Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
  ToneMapping,
  Glitch,
  DepthOfField,
} from "@react-three/postprocessing";
import { ToneMappingMode, BlendFunction, GlitchMode } from "postprocessing";
import { useEffect, useRef } from "react";

const AudioController = ({ audioRef }) => {
  const { camera } = useThree();
  const target = useRef({ x: 12.14, z: -5 });
  const range = 10; // Volume drops off after this distance

  useFrame(() => {
    if (!audioRef.current || !camera) return;

    const dx = camera.position.x - target.current.x;
    const dz = camera.position.z - target.current.z;
    const distance = Math.sqrt(dx * dx + dz * dz);

    // Calculate volume based on proximity
    let volume = 1 - distance / range;
    volume = Math.max(0, Math.min(1, volume)); // Clamp 0–1

    // Apply maxVolume multiplier
    audioRef.current.volume = volume * 1;
  });

  return null;
};
const App = () => {
  const audioAmbientRef = useRef(null);
  const audioNightClubRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioAmbientRef.current) {
        audioAmbientRef.current.volume = 0.2;
        audioAmbientRef.current.play().catch((e) => {
          console.log("Autoplay failed:", e);
        });
      }
    };

    const playAudioNightClub = () => {
      if (audioNightClubRef.current) {
        // audioNightClubRef.current.volume = 0.2;
        audioNightClubRef.current.play().catch((e) => {
          console.log("Autoplay failed:", e);
        });
      }
    }

    window.addEventListener("click", playAudio, { once: true });
    window.addEventListener("click", playAudioNightClub, { once: true });

    return () => {
      window.removeEventListener("click", playAudio);
      window.removeEventListener("click", playAudioNightClub);
    }
  }, []);

  return (
    <>
      <audio ref={audioAmbientRef} src="./audio/ambient-4.mp3" loop />
      <audio ref={audioNightClubRef} src="./audio/night-club-2.mp3" loop />
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
        <AudioController audioRef={audioNightClubRef} />
        
        <EffectComposer>
          <Vignette
            eskil={false}
            offset={0}
            darkness={1.1}
          />
          <Bloom
            intensity={0.2}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
          {/* <Glitch
          delay={[0.1, 30]}
          duration={[0.1, 0.4]}
          strength={[0.05, 0.01]}
          active={true}
          ratio={[0.1, 0.2]}
        /> */}
          {/* <Noise opacity={.4}  premultiply /> */}
          {/* <DepthOfField
          focusDistance={0.01}
          focalLength={0.1}
          bokehScale={2}
          height={480}
          blur={0.5}
        /> */}
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
        </EffectComposer>
      </Canvas>
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
