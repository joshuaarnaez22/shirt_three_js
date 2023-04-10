import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  slideAnimation,
  headTextAnimation,
  headContentAnimationR,
  headContentAnimationL,
  headContainerAnimation,
  btnAnimation,
} from "@/components/config/motion";
import state from "@/services/store";
import Image from "next/image";
import CustomButton from "../reusable/CustomButton";
const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section {...slideAnimation("left")} className="home">
          <motion.header {...slideAnimation("down")} className="p-5">
            <Image
              src="/threejs.png"
              alt="logo"
              width="32"
              height="32"
              className="object-contain"
            />
          </motion.header>
          <motion.div
            className="w-full block text-center xl:w-fit xl:flex space-y-5"
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
                Create your own unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style
              </p>
            </motion.div>
            <CustomButton
              title="Customize it"
              type="filled"
              handleClick={() => (state.intro = false)}
              customStyle="w-fit text-sm font-bold hover:scale-x-105 transition ease-in-out"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
export default Home;
