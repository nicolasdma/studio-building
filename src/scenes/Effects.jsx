import React from "react";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

const Effects = () => {
  return (
    <Sparkles
      count={50}
      size={4}
      scale={30}
      color="#68ffd1"
      position-y={2}
    />
  );
} 

export default React.memo(Effects);