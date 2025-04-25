import React, { useEffect, useState } from "react";
import { Sparkles } from "@react-three/drei";

const RandomBlinkingSparkle = ({ index }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const randomStartDelay = Math.random() * 2000; // up to 2s delay
    const randomSpeed = 500 + Math.random() * 1500; // between 0.5s and 2s

    let direction = 1;

    const start = setTimeout(() => {
      const interval = setInterval(() => {
        setOpacity(prev => {
          let next = prev + 0.1 * direction;
          if (next >= 1) {
            next = 1;
            direction = -1;
          } else if (next <= 0) {
            next = 0;
            direction = 1;
          }
          return next;
        });
      }, randomSpeed / 20); // smoothness
    }, randomStartDelay);

    return () => clearTimeout(start);
  }, []);

  return (
    <Sparkles
      key={index}
      size={5}
      scale={40}
      color="#68ffd1"
      opacity={opacity}
      count={1}
    />
  );
};

const FireflyField = () => {
    const sparkles = Array.from({ length: 50 }, (_, i) => (
      <RandomBlinkingSparkle key={i} index={i} />
    ));
  
    return <>{sparkles}</>;
  };

export default FireflyField
