import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "@/services/store";
import * as THREE from "three";
interface CameraRigProps {
  children: React.ReactNode;
}
const CameraRig = ({ children }: CameraRigProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    const desktop = window.innerWidth >= 1024;
    const mobile = window.innerWidth < 1024;
    let targetPosition = [0, 0, 0];
    if (snap.intro) {
      if (desktop) targetPosition = [0, 0, 1];
      if (mobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (desktop) targetPosition = [0, 0, 1];
      if (mobile) targetPosition = [0, -0.2, 1.5];
    }

    easing.damp3(
      state.camera.position,
      new THREE.Vector3().fromArray(targetPosition),
      0.25,
      delta
    );

    if (groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
        [state.pointer.y / 5, -state.pointer.x, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
};
export default CameraRig;
