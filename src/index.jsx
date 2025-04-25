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

const targetX = 12;
const targetZ = -5;
const AudioController = ({ audioRef }) => {
  const { camera } = useThree();

  useFrame(() => {
    if (audioRef.current) {
      // Let's say the nightclub is around x = 5
      // const targetX = 5;

      // How far the sound "spreads"
      const range = 10; 

      const dx = camera.position.x - targetX;
      const dz = camera.position.z - targetZ;

      const distance = Math.sqrt(dx * dx + dz * dz); 

      // Calculate distance from target
      // const distance = Math.abs(camera.position.x - targetX);

      // Map distance to volume (closer = louder, farther = quieter)
      let volume = 1 - distance / range;

      volume = Math.max(0, Math.min(1, volume)); // clamp between 0 and 1
      console.log(volume, camera.position.x, camera.position.z);
      audioRef.current.volume = volume * 1; // 0.8 is the max volume
    }
  });

  return null;
};

const App = () => {
  const audioAmbientRef = useRef(null);
  const audioNightClubRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioAmbientRef.current) {
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
      <audio ref={audioNightClubRef} src="./audio/night-club.mp3" loop />
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
