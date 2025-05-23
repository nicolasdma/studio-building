import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva"; // 👈 import leva

export default function Model({ onClick }) {
  const { lightPositionX, lightPositionY, lightPositionZ } = useControls({
    lightPositionX: {
      value: -3.7,
      min: -10,
      max: 10,
      step: 0.1,
      label: "Light X",
    },
    lightPositionY: {
      value: 3.2,
      min: -10,
      max: 10,
      step: 0.1,
      label: "Light Y",
    },
    lightPositionZ: {
      value: 4.4,
      min: -10,
      max: 10,
      step: 0.1,
      label: "Light Z",
    },
  });

  const { nodes, materials } = useGLTF("/building-unwraping-optimized.glb");
  const [currentPointerPos, setCurrentPointerPos] = React.useState(null);

  const cursorPointer = () => {
    document.body.style.cursor = "pointer";
  };
  const defaultPointer = () => {
    document.body.style.cursor = "default";
  };

  const onMouseDown = (e) => {
    e.stopPropagation();
    setCurrentPointerPos(e.point);
  };

  const onMouseUp = (e, dir) => {
    e.stopPropagation();
    const distance = Math.sqrt(
      Math.pow(currentPointerPos.x - e.point.x, 2) +
        Math.pow(currentPointerPos.y - e.point.y, 2) +
        Math.pow(currentPointerPos.z - e.point.z, 2)
    );
    if (distance < 0.05) {
      onClick(e, dir);
    }
  };

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary001.geometry}
        material={materials.Black}
        position={[10.963, 15.019, -9.958]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.machineFloor.geometry}
        material={materials["Material.006"]}
        position={[-5.126, 0, -5.63]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={nodes.Circle.material}
        position={[-5.467, 2.582, -6.467]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.908}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={nodes.Circle001.material}
        position={[-5.467, 2.14, -6.467]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.908}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={nodes.Circle002.material}
        position={[-5.467, 1.693, -6.467]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.908}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={nodes.Circle003.material}
        position={[-5.467, 1.272, -6.467]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.908}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.004"]}
        position={[-5.126, 0.056, -5.63]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass.geometry}
        material={materials.Glass}
        position={[-5.128, 0.057, -5.63]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glassFrame.geometry}
        material={nodes.glassFrame.material}
        position={[-5.126, 0.056, -5.63]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shelvs.geometry}
        material={nodes.shelvs.material}
        position={[-5.126, 0.056, -5.63]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.displayer.geometry}
        material={nodes.displayer.material}
        position={[-5.829, 2.51, -4.816]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 0.823, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.displayerGlass.geometry}
        material={materials["Material.001"]}
        position={[-5.829, 2.51, -4.816]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 0.823, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={nodes.Plane007.material}
        position={[-5.833, 1.887, -4.895]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.882}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials["Material.002"]}
        position={[-5.833, 1.887, -4.895]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.882}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={nodes.Plane009.material}
        position={[-5.833, 1.378, -4.905]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.053, 0.902, 1.053]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={nodes.Plane010.material}
        position={[-5.126, 0, -5.63]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials["Material.004"]}
        position={[-4.866, 3.388, -5.971]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials["Material.004"]}
        position={[-5.363, 4.352, -5.552]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.856]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials["Material.002"]}
        position={[-5.363, 4.352, -5.656]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1, 1, 0.856]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={materials["Material.004"]}
        position={[-5.047, 1.944, -6.763]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={materials["Material.005"]}
        position={[-5.047, 1.574, -6.899]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials["Neon Purple"]}
        position={[0.955, 7.036, 4.611]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.564, 1.564, 2.079]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={materials.Black}
        position={[-7.177, 15.276, 6.438]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[2.431, 1.849, 2.458]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={materials["Material.001"]}
        position={[14.815, 14.885, -9.872]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.847, 1.596, 2.121]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert014.geometry}
        material={materials["Material.001"]}
        position={[15.176, 14.739, -9.872]}
        scale={[1.158, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={nodes.Plane006.material}
        position={[6.455, -0.338, 8.705]}
        rotation={[0, 0.536, 0]}
        scale={0.62}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle010.geometry}
          material={nodes.Circle010.material}
          position={[-0.023, 4.336, 0.001]}
          scale={0.169}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle012.geometry}
          material={nodes.Circle012.material}
          position={[5.446, 4.336, 0.001]}
          scale={0.169}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane046.geometry}
          material={nodes.Plane046.material}
          position={[2.72, 3.738, 0.091]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[4.714, 0.62, 0.62]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane047.geometry}
          material={nodes.Plane047.material}
          position={[5.439, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert015.geometry}
          material={materials["Sign tube"]}
          position={[0, 0.125, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert016.geometry}
          material={materials["Sign tube"]}
          position={[5.439, 0.125, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert017.geometry}
          material={nodes.Vert017.material}
          position={[-0.023, 4.203, 0.001]}
          scale={0.754}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert018.geometry}
          material={nodes.Vert018.material}
          position={[5.446, 4.203, 0.001]}
          scale={0.754}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle008.geometry}
        material={nodes.Circle008.material}
        position={[9.59, 18.497, -10.164]}
        scale={0.094}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle014.geometry}
        material={nodes.Circle014.material}
        position={[8.737, 18.497, -10.164]}
        scale={0.094}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle015.geometry}
        material={nodes.Circle015.material}
        position={[7.124, 15.792, 1.442]}
        scale={0.094}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle016.geometry}
        material={nodes.Circle016.material}
        position={[7.124, 16.082, 1.442]}
        scale={0.183}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle017.geometry}
        material={nodes.Circle017.material}
        position={[9.59, 18.784, -10.153]}
        scale={0.183}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle018.geometry}
        material={nodes.Circle018.material}
        position={[8.737, 18.784, -10.153]}
        scale={0.183}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle019.geometry}
        material={nodes.Circle019.material}
        position={[5.576, 18.497, -10.164]}
        scale={0.094}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert020.geometry}
        material={materials["Sign tube"]}
        position={[8.08, 3.665, -6.176]}
        scale={[0.693, 0.781, 0.866]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle020.geometry}
          material={nodes.Circle020.material}
          position={[0.583, -2.442, 0.051]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert021.geometry}
        material={materials.Black}
        position={[-2.546, 16.868, 5.186]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.Cobre}
        position={[5.684, 10.101, -4.574]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.267, 0.313, 0.498]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane041.geometry}
        material={nodes.Plane041.material}
        position={[-2.55, 16.979, 4.954]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.267, 0.313, 0.498]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text005.geometry}
        material={materials.Black}
        position={[-8.53, 15.276, 6.438]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[2.431, 1.849, 2.458]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane051.geometry}
        material={nodes.Plane051.material}
        position={[7.328, 2.717, 0.892]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.413, 0.423, 0.673]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle021.geometry}
        material={nodes.Circle021.material}
        position={[7.106, 2.287, 1.096]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane052.geometry}
        material={nodes.Plane052.material}
        position={[2.355, -0.337, -0.354]}
        scale={[1.076, 1.258, 1.258]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane053.geometry}
        material={nodes.Plane053.material}
        position={[2.219, 1.279, -0.419]}
        rotation={[0, 0.36, 0]}
        scale={[0.777, 0.968, 0.941]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle022.geometry}
        material={materials["Sign tube"]}
        position={[-2.47, 4.953, -8.595]}
        scale={0.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle023.geometry}
        material={materials["Glass.001"]}
        position={[-2.47, 4.953, -8.595]}
        scale={0.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle025.geometry}
        material={materials["Sign tube"]}
        position={[-2.47, 4.953, -8.595]}
        scale={0.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane054.geometry}
        material={materials["Sign tube"]}
        position={[-0.763, 13.969, 7.756]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane055.geometry}
          material={materials["Sign tube"]}
          position={[0, 2.445, -0.335]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056.geometry}
          material={materials.Light}
          position={[0, 2.445, -0.335]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane057.geometry}
          material={materials["Sign tube"]}
          position={[0, 2.445, -0.087]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert019.geometry}
          material={materials["Sign tube"]}
          position={[0, 0.131, -0.168]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert022.geometry}
        material={materials["Sign tube"]}
        position={[3.18, 3.665, -11.028]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.693, 0.781, 0.866]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle024.geometry}
          material={nodes.Circle024.material}
          position={[0.583, -2.442, -0.021]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials["Sign tube"]}
        position={[8.262, 11.795, -3.591]}
        scale={0.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle027.geometry}
        material={materials["Glass.001"]}
        position={[8.262, 11.795, -3.591]}
        scale={0.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle028.geometry}
        material={materials["Sign tube"]}
        position={[8.262, 11.795, -3.591]}
        scale={0.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.001"]}
        position={[-5.37, 4.352, -5.621]}
        rotation={[Math.PI / 2, 0, 1.571]}
        scale={0.879}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials["Material.002"]}
        position={[-5.435, 3.787, -5.637]}
        rotation={[Math.PI / 2, 0, 1.571]}
        scale={1.29}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert010.geometry}
        material={materials["Tube "]}
        position={[-3.264, 16.611, 4.657]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert011.geometry}
        material={materials["Tube "]}
        position={[-4.147, 16.611, 4.657]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert012.geometry}
        material={materials.Farola}
        position={[7.591, -0.332, -10.154]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert013.geometry}
        material={materials["Tube "]}
        position={[-2.913, -0.338, -11.749]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[0, -0.689, -0.977]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={nodes.Plane002.material}
        position={[0.87, 0.006, -1.014]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004.geometry}
        material={materials.Cobre}
        position={[5.686, 12.432, -3.332]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={nodes.Plane004.material}
        position={[0, -0.689, -0.977]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials.Heramientas}
        position={[-3.588, -0.308, 5.954]}
        onPointerEnter={cursorPointer}
        onPointerLeave={defaultPointer}
        onPointerDown={onMouseDown}
        onPointerUp={(e) => onMouseUp(e, [0, 0.01, 0.3])}
        // material={new THREE.MeshBasicMaterial({ wireframe: true })}
      />
      <mesh
        position={[-3.3, 3.1, 4.2]}
        scale={0.7}
        rotation={[0, 2.76, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="black" />
      </mesh>
      <mesh
          castShadow
          receiveShadow
        // position={[lightPositionX, lightPositionY, lightPositionZ]}
        position={[-4.6, 2.2, 4.5]}
        scale={[0.25, 0.35, 0.25]}
        rotation={[0, 2.76, 0]}
      >
        <sphereGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="black" />
      </mesh>
      <mesh
          castShadow
          receiveShadow
        // position={[lightPositionX, lightPositionY, lightPositionZ]}
        position={[-3.5, 2.2, 4.3]}
        scale={.4}
        rotation={[0, 2.76, 0]}
      >
        <sphereGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="black" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={nodes.Plane017.material}
        position={[0.955, 6.087, 3.721]}
        scale={[1.039, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018.geometry}
        material={nodes.Plane018.material}
        position={[-6.18, -0.316, 1.568]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane019.geometry}
        material={nodes.Plane019.material}
        position={[-1.8, 14.857, -2.173]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane020.geometry}
        material={nodes.Plane020.material}
        position={[-6.18, -0.316, 1.568]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[2.577, 13.196, 5.169]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert.geometry}
        material={materials["Tube "]}
        position={[5.943, -0.313, 1.569]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert002.geometry}
        material={materials["Tube "]}
        position={[5.678, 9.559, -1.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert003.geometry}
        material={materials["Tube "]}
        position={[6.969, 9.559, 5.976]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022.geometry}
        material={nodes.Plane022.material}
        position={[0, -0.689, -0.977]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane023.geometry}
        material={materials["Metal blanco"]}
        position={[-4.256, 16.492, 4.659]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.Cobre}
        position={[-7.863, 14.961, 6.467]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert004.geometry}
        material={materials["Tube "]}
        position={[-3.36, 8.185, 4.458]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane024.geometry}
        material={materials["Metal blanco"]}
        position={[3.63, 15.801, 2.015]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane025.geometry}
        material={materials["Metal blanco"]}
        position={[3.63, 15.801, 2.015]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert001.geometry}
        material={materials["Sign tube"]}
        position={[3.289, 7.695, 4.096]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert005.geometry}
        material={materials["Sign tube"]}
        position={[-1.517, 7.695, 4.096]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert006.geometry}
        material={materials["Sign tube"]}
        position={[-7.863, 12.327, 5.263]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert007.geometry}
        material={materials["Sign tube"]}
        position={[-7.863, 10.672, 5.263]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane027.geometry}
        material={nodes.Plane027.material}
        position={[0, -0.689, -0.977]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane029.geometry}
        material={materials["Material.004"]}
        position={[0, -0.689, -0.977]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane030.geometry}
        material={materials["Material.004"]}
        position={[0.464, -0.689, -0.977]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane031.geometry}
        material={nodes.Plane031.material}
        position={[0, -0.689, -0.977]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane032.geometry}
        material={materials["Sign tube"]}
        position={[5.887, 12.432, -3.332]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane033.geometry}
        material={materials["Black Gloss"]}
        position={[5.686, 12.432, -3.332]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane034.geometry}
        material={materials["Metal blanco"]}
        position={[5.678, 9.559, -0.297]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert009.geometry}
        material={materials["Sign tube"]}
        position={[8.098, 3.806, -3.393]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane035.geometry}
        material={materials["Sign tube"]}
        position={[-6.308, -0.388, 1.908]}
        scale={2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane037.geometry}
        material={materials["Sign tube"]}
        position={[-5.989, -0.157, 1.538]}
        scale={1.968}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane036.geometry}
        material={materials["Sign tube"]}
        position={[-5.989, -0.157, 1.538]}
        scale={1.968}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane038.geometry}
        material={materials["Sign tube"]}
        position={[-5.989, -0.157, 1.538]}
        scale={1.968}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane021.geometry}
        material={materials["Material.006"]}
        position={[-3.478, 16.496, 5.643]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane039.geometry}
        material={materials["Material.006"]}
        position={[-3.478, 16.496, 5.643]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={nodes.Circle006.material}
        position={[6.723, 7.494, -1.433]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle009.geometry}
        material={materials["Material.006"]}
        position={[-5.101, 16.499, 5.45]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle011.geometry}
        material={materials.Farola}
        position={[7.591, -0.332, -10.154]}
        scale={1.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.Farola}
        position={[15.608, 14.817, -10.154]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[7.591, 18.354, -10.154]}
        scale={[0.926, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane043.geometry}
        material={nodes.Plane043.material}
        position={[0.417, -0.312, -9.598]}
        rotation={[Math.PI, -0.028, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane045.geometry}
        material={nodes.Plane045.material}
        position={[0.417, -0.312, -9.598]}
        rotation={[Math.PI, -0.028, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane044.geometry}
        material={nodes.Plane044.material}
        position={[0.582, 4.298, 2.244]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials.Black}
        position={[0.955, 6.087, 3.721]}
        scale={[1.039, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.001"]}
        position={[-7.863, 14.961, 6.467]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle013.geometry}
        material={materials["Material.006"]}
        position={[6.523, 7.487, -1.472]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.029}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane048.geometry}
          material={nodes.Plane048.material}
          position={[0.845, -0.792, 0.007]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane049.geometry}
          material={materials["Material.006"]}
          position={[1.983, 0.193, 0.003]}
          scale={[1.237, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane050.geometry}
          material={materials["Material.006"]}
          position={[1.983, 0.193, 0.003]}
          scale={[1.237, 1, 1]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.001"]}
        position={[-9.006, 14.961, 6.467]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Black Gloss"]}
        position={[15.608, 14.817, -10.154]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials.Window}
        position={[2.577, 13.196, 5.169]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane059.geometry}
        material={materials.Heramientas}
        position={[0.359, 5.704, -9.057]}
        rotation={[2.819, 0, 0]}
        scale={[3.109, 2.803, 2.803]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane058.geometry}
        material={materials["Cementro suelo"]}
        position={[0.837, -0.027, 1.69]}
        scale={14.505}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane028.geometry}
        material={materials.Heramientas}
        position={[-5.386, -0.199, 4.913]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane040.geometry}
        material={materials.Heramientas}
        position={[-5.386, -0.199, 3.794]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane042.geometry}
        material={materials.Heramientas}
        position={[-2.746, -0.199, 4.913]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane060.geometry}
        material={materials.Heramientas}
        position={[-2.746, -0.199, 3.794]}
        scale={0.045}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane061.geometry}
        material={materials.Heramientas}
        position={[-3.588, 0.495, 5.954]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane062.geometry}
        material={nodes.Plane062.material}
        position={[0, 0.232, -0.977]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert023.geometry}
        material={materials["Material.007"]}
        position={[-1.671, 2.899, -5.853]}
        scale={0.393}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane063.geometry}
          material={materials["Material.007"]}
          position={[-0.341, 2.025, 0]}
          rotation={[0, 0, -0.558]}
          scale={0.952}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert024.geometry}
        material={materials["Material.003"]}
        position={[-0.862, 2.906, -6.131]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.515, -0.705, -0.494]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert025.geometry}
        material={materials["Material.008"]}
        position={[-0.028, 2.305, -10.15]}
        scale={0.46}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane064.geometry}
          material={materials["Material.011"]}
          position={[-0.314, 0.714, 0]}
          rotation={[0, 0, -0.285]}
          scale={0.962}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert026.geometry}
        material={materials["Material.009"]}
        position={[1.776, 2.293, -10.15]}
        scale={0.46}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert027.geometry}
        material={materials["Material.010"]}
        position={[1.109, 2.305, -9.621]}
        rotation={[0, -0.85, 0]}
        scale={0.46}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane065.geometry}
          material={materials["Material.012"]}
          position={[-0.39, 0.379, 0]}
          rotation={[0, 0, 0.424]}
          scale={0.99}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.Sprinkles}
        position={[0.159, 2.426, -9.539]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plate.geometry}
        material={materials.Material}
        position={[2.306, 1.846, -5.954]}
        scale={2.32}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Donut.geometry}
          material={materials["Material.013"]}
          position={[0.059, 0.023, 0.012]}
          rotation={[0, 0.902, 0.022]}
          scale={[0.766, 1.144, 1.145]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Donut001.geometry}
          material={materials["Material.013"]}
          position={[-0.064, 0.026, -0.007]}
          rotation={[0, 0, 0.022]}
          scale={[0.877, 1.259, 1.145]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Donut003.geometry}
          material={materials["Material.013"]}
          position={[-0.052, 0.079, -0.009]}
          rotation={[-0.307, -1.198, -0.25]}
          scale={[0.696, 1.273, 1.054]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Donut007.geometry}
          material={materials["Material.013"]}
          position={[0.015, 0.042, -0.084]}
          rotation={[-1.55, -0.958, -0.947]}
          scale={[0.766, 1.144, 1.145]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icing.geometry}
          material={materials["chocolate icing"]}
          position={[0.059, 0.023, 0.012]}
          rotation={[0, 0.902, 0.022]}
          scale={[0.766, 1.144, 1.145]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icing001.geometry}
          material={materials["yellow icing"]}
          position={[-0.064, 0.026, -0.007]}
          rotation={[0, 0, 0.022]}
          scale={[0.877, 1.259, 1.145]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icing003.geometry}
          material={materials["Pink icing"]}
          position={[-0.052, 0.079, -0.009]}
          rotation={[-0.307, -1.198, -0.25]}
          scale={[0.696, 1.273, 1.054]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icing007.geometry}
          material={materials["Pink icing"]}
          position={[0.015, 0.042, -0.084]}
          rotation={[-1.55, -0.958, -0.947]}
          scale={[0.766, 1.144, 1.145]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Sprinkles}
        position={[0.17, 2.425, -9.539]}
        scale={[1, 3.42, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.Sprinkles}
        position={[0.168, 2.425, -9.539]}
        scale={[1, 3.42, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.Sprinkles}
        position={[0.165, 2.425, -9.538]}
        scale={[1, 3.42, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials.Sprinkles}
        position={[0.162, 2.425, -9.538]}
      />
    </group>
  );
}

useGLTF.preload("/building-unwraping-optimized.glb");

{
  /* <mesh
castShadow
receiveShadow
geometry={nodes.Plane004.geometry}
material={nodes.Plane004.material}
position={[0, -0.689, -0.977]}
onPointerEnter={cursorPointer}
onPointerLeave={defaultPointer}
onPointerDown={onMouseDown}
onPointerUp={(e) => onMouseUp(e, [0.25, 0, 0])}
/>
<mesh
castShadow
receiveShadow
geometry={nodes.Plane014.geometry}
material={materials.Heramientas}
position={[-3.588, -0.308, 5.954]}
onPointerEnter={cursorPointer}
onPointerLeave={defaultPointer}
onPointerDown={onMouseDown}
onPointerUp={(e) => onMouseUp(e, [0, 0.01, 0.3])}
/> */
}
