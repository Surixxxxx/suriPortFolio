import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
// import sureshCV from "../../../public/resume/sureshCV.pdf"
const HeroText = () => {
  return (
    <div className="flex flex-col gap-6 h-full justify-center md:text-left  sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase tracking-widest"
      >
        MERN Stack Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 font-extrabold uppercase drop-shadow-lg"
      >
        Suresh
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg text-gray-300 leading-relaxed"
      >
        I’m a passionate <span className="font-semibold text-white">MERN Stack Developer</span> with{" "}
        <span className="text-orange font-bold">1 year of hands-on experience</span>.
        <br />
        Skilled in building fast, scalable, and modern web applications.
      </motion.p>

      {/* Download CV Button */}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <a
          href="/suriCV.pdf"
          download
         className="inline-block px-6 py-3 mt-4 sm:mt-0 mb-6 sm:mb-4 bg-orange text-white font-semibold rounded-md shadow-lg transition-all duration-300 hover:bg-white hover:text-orange hover:scale-105 hover:shadow-orange-500/50"
        >
          Download CV
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;
