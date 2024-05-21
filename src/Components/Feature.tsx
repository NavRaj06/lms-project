import Illustration2 from "../assets/Illustration2.png";
// import LMS2 from "../assets/LMS2.jpeg";
import { motion } from "framer-motion";
import { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const features = [
  "Comprehensive Content Protection.",
  "Unrestricted Access.",
  "Enhanced Performance",
  "Flexible Usage Policies.",
  "Integrated Analytics.",
];

const Feature = () => {
  const animation = useMemo(() => getScrollAnimation(), []);
  return (
    <div id="feature" className="pt-0 pb-10 px-4 sm:px-6 lg:px-8">
      <ScrollAnimationWrapper>
        <motion.div
          className="pt-1 sm:pt-2 lg:pt-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={animation}
        >
          <div className="order-2 md:order-1 md:justify-center flex justify-center items-start">
            <motion.div variants={animation}>
              <img src={Illustration2} alt="VPN Illustrasi" width={612} height={383} />
            </motion.div>
          </div>
          <div className="order-2 md:order-1 flex flex-col items-start md:items-start justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-medium leading-normal mb-4 sm:mb-6 lg:mb-8">
              Explore learning resources on our Management System
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500 mb-6 sm:mb-8">
              Elevate your expertise with our tailored IT courses on our
              Learning Management System.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8 text-start">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={animation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Feature;
