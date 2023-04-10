import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  slideAnimation,
  headTextAnimation,
  headContentAnimationR,
  headContainerAnimation,
  fadeAnimation,
} from "@/components/config/motion";
import state from "@/services/store";
import Image from "next/image";
import CustomButton from "../reusable/CustomButton";
import CanvasModel from "../canvas/CanvasModel";
const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <div className="w-full grid grid-cols-12 transition-all ease-in">
          <div className="col-span-12 lg:col-span-6 ">
            <motion.header {...slideAnimation("down")} className="p-5 absolute">
              <Image
                src="/threejs.png"
                alt="logo"
                width="32"
                height="32"
                className="object-contain "
              />
            </motion.header>
            <motion.div
              className="h-screen flex-col text-center space-y-5 relative flex justify-center items-center"
              {...headContainerAnimation}
            >
              <motion.div {...headTextAnimation}>
                <h1 className="head-text">
                  LET&apos;S <br className="hidden xl:block" /> DO IT.
                </h1>
              </motion.div>
              <motion.div
                {...headContentAnimationR}
                className="mx-auto text-gray-600 font-normal text-center max-w-md"
              >
                <p>
                  Create your own unique and exclusive shirt with our brand-new
                  3D customization tool.{" "}
                  <strong>Unleash your imagination</strong> and define your own
                  style
                </p>
              </motion.div>
              <CustomButton
                title="Customize it"
                type="filled"
                handleClick={() => (state.intro = false)}
                customStyle="w-fit text-sm font-bold hover:scale-x-105"
              />
            </motion.div>
          </div>
          <motion.div
            {...fadeAnimation}
            className="hidden lg:flex lg:col-span-6"
          >
            <CanvasModel />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default Home;
