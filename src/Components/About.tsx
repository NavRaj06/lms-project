import ButtonPrimary from "./Common_Components/ButtonPrimary";
import Illustration1 from "../assets/Images/Illustration1.png";
// import LMS1 from "../assets/LMS1.jpg";
import { motion } from "framer-motion";
import { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { useNavigate } from "react-router-dom";

const About = () => {
  const animation = useMemo(() => getScrollAnimation(), []);
  const navigate = useNavigate();

  return (
    <div id="about" className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 ">
      <ScrollAnimationWrapper>
        <motion.div
          className="pt-12 sm:pt-20 lg:pt-28 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={animation}
        >
          <div className="order-2 md:order-1 flex flex-col items-start md:items-start justify-center md:ml-0 lg:ml-44">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-normal text-primary mb-4 sm:mb-6 lg:mb-8">
              Explore learning resources on our Management System
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500 mb-6 sm:mb-8">
              Elevate your expertise with our tailored IT courses on our
              Learning Management System.
            </p>
            <ButtonPrimary onClick={() => navigate("courses")}>
              Get Started
            </ButtonPrimary>
          </div>
          <div className="order-1 md:order-2 md:justify-center flex justify-center items-center">
            <motion.div variants={animation}>
              <img
                src={Illustration1}
                alt="VPN Illustrasi"
                width={612}
                height={383}
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default About;
