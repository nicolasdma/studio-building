import React from "react";

const Placeholder = ({
    positionY = 0.5,
}) => {
  return (
    <mesh position-y={positionY} scale={[2, 3, 2]}>
      <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
      <meshBasicMaterial wireframe color={"red"} />
    </mesh>
  );
};

export default Placeholder;
