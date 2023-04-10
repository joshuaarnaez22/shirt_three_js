import React from "react";
import { AiPicker, FilePicker, Tab, ColorPicker } from "./subcomponents";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "@/services/store";
import { EditorTabs, FilterTabs } from "../config/constant";
import { fadeAnimation, slideAnimation } from "../config/motion";
import CustomButton from "../reusable/CustomButton";
const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <>
      <AnimatePresence>
        {!snap.intro && (
          <>
            <motion.div
              className="absolute top-0 left-0 z-10"
              {...slideAnimation("left")}
            >
              <div className="flex items-center min-h-screen">
                <div className="editortabs-container">
                  {EditorTabs.map((tab) => (
                    <Tab tab={tab} key={tab.name} handleClick={() => {}} />
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              {...fadeAnimation}
              className="absolute top-5 right-5 z-10"
            >
              <CustomButton
                title="Back"
                handleClick={() => {
                  state.intro = true;
                }}
                customStyle="w-fit text-sm font-bold px-5 hover:scale-x-105 transition ease-in-out "
                type="filled"
              />
            </motion.div>

            <motion.div
              className="filtertabs-container"
              {...slideAnimation("up")}
            >
              {FilterTabs.map((tab) => (
                <Tab tab={tab} key={tab.name} handleClick={() => {}} />
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Customizer;
