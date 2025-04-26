import { useFrame, useThree } from "@react-three/fiber";

const AudioZoneController = ({ target, range = 10, audioRef, maxVolume = 1 }) => {
  const { camera } = useThree();

  useFrame(() => {
    if (!audioRef.current || !camera) return;

    const dx = camera.position.x - target.x;
    const dz = camera.position.z - target.z;
    const distance = Math.sqrt(dx * dx + dz * dz);

    let volume = 1 - distance / range;
    volume = Math.max(0, Math.min(1, volume)) * maxVolume;

    audioRef.current.volume = volume;

    if (audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
    }
    
    audioRef.current.volume = volume;
  });

  return null;
};

export default AudioZoneController;