import { useMemo } from "react";
import ScrollAnimationWrapper from "../Components/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import { motion } from "framer-motion";
import CustomSelect from "../Components/Common_Components/Select";
import CourseComponent from "../Components/Common_Components/CourseComponent";
import { courseData } from "../utils/Constants";

const Courses = () => {
  const animation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div id="about" className="pt-5 pb-10 px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper>
          <motion.div
            className="pt-20 sm:pt-20 lg:pt-28 grid grid-cols-1 gap-8 lg:gap-12"
            variants={animation}
          >
            <div className="order-2 md:order-1 flex flex-col items-center justify-center lg:ml-44">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-normal text-primary mb-4 sm:mb-6 lg:mb-8">
                Checkout our diverse courses
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-500 mb-6 sm:mb-8 text-center md:text-left">
                We have a big catalogue where you can find different courses for
                different fields, you can learn a new skill in just 1 hour.
                Awesome, right?
              </p>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="container mx-auto p-4 sm:p-4 md:p-4 lg:p-4 xl:p-4">
        <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex flex-col sm:flex-row justify-evenly space-y-4 sm:space-y-0 sm:space-x-7 w-full sm:w-auto">
            <CustomSelect />
            <CustomSelect />
          </div>
          <div className="mt-4 sm:mt-0 w-full sm:w-auto">
            <CustomSelect />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseData.map(({ img, description, title }) => {
            return (
              <CourseComponent
                key={title}
                img={img}
                title={title}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
