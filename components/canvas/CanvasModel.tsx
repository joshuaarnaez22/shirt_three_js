import { Environment, Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Backdrop, CameraRig, Shirt } from "./subcomponents";
import { motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "@/services/store";

const CanvasModel = () => {
  const snap = useSnapshot(state);
  return (
    <>
      <Canvas className={`absolute  ${snap.intro ? "top-20" : "top-0"}`}>
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <CameraRig>
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Canvas>
    </>
  );
};
export default CanvasModel;
