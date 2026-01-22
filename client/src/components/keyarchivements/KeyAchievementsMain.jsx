import KeyAchievementsText from "./KeyAchievementsText";
import AllKeyAchievements from "./AllKeyAchievements";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const KeyAchievementsMain = () => {
  return (
    <div id="keyachievements" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <KeyAchievementsText />
      </motion.div>
      <AllKeyAchievements />
    </div>
  );
};

export default KeyAchievementsMain;
