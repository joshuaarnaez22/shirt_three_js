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
      <Canvas className="absolute transition-all duration-500 ease-in-out">
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
