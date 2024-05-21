import Photo1 from "../assets/photo1.jpg";
import Photo2 from "../assets/photo2.jpg";
import Photo3 from "../assets/photo3.png";
import { Slide, Fade } from "react-awesome-reveal";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { motion } from "framer-motion";
import { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";

const CardsData = [
  {
    id: 1,
    img: Photo1,
    title: "Who we are",
    desc: "This card encapsulates the essence of our organization's identity. It defines who we are at our core, highlighting our values, beliefs, and unique qualities that distinguish us from others. It serves as a compass guiding our actions and decisions, ensuring alignment with our fundamental principles and character.",
  },
  {
    id: 2,
    img: Photo2,
    title: "Our Vission",
    desc: "The vision card illustrates our aspirations for the future. It paints a vivid picture of what we aim to achieve, setting ambitious yet attainable goals that inspire and motivate us. Our vision represents the ultimate destination we strive to reach, driving innovation, growth, and progress within our organization.    ",
  },
  {
    id: 3,
    img: Photo3,
    title: "Our Mission",
    desc: "This card articulates our purpose and reason for existence. It outlines the specific objectives and tasks we undertake to fulfill our vision and realize our potential. Our mission serves as a roadmap, guiding our daily endeavors and shaping our strategic initiatives.",
  },
];

const AnimatedCard = () => {
  const animation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="container mx-auto p-14">
      <ScrollAnimationWrapper>
        <motion.div
          className="pt-12 sm:pt-20 lg:pt-28 gap-8 lg:gap-12"
          variants={animation}
        >
          {/* cards section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2">
            {CardsData.map(({ id, img, title, desc }) => {
              return (
                <div
                  key={id}
                  className="text-white shadow-md rounded-lg overflow-hidden relative group"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {/* overlay section */}
                  <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                    <div className="space-y-4">
                      <Slide>
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <div className="max-h-36 overflow-y-auto lg:max-h-none lg:overflow-hidden">
                          {/* Set max height and overflow for smaller screens */}
                          <Fade >
                            <p className="break-words">{desc}</p>
                          </Fade>
                        </div>
                      </Slide>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default AnimatedCard;
