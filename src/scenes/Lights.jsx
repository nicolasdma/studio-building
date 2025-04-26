export default function Lights() {
    return (
      <>
        <directionalLight
          castShadow
          position={[1, 20, 3]}
          intensity={4.5}
          color="#79AFFF"
          shadow-bias={-0.00005}
          shadow-normalBias={0.02}
        />
        <pointLight
          castShadow
          position={[0, 10, 0]}
          intensity={10}
          color="#68ffd1"
        />
      </>
    );
  }
  