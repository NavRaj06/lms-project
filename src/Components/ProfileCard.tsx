import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
// import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
// import { motion } from "framer-motion";
// import { useMemo } from "react";
// import getScrollAnimation from "../utils/getScrollAnimation";
import {
  PiLinkedinLogoDuotone,
  PiMicrosoftOutlookLogoDuotone,
  PiMicrosoftTeamsLogoDuotone,
} from "react-icons/pi";

const CardsData = [
  {
    id: 1,
    name: "Luffy",
    designation: "Software Engineer",
    image: "src/assets/profile1.jpg",
  },
  {
    id: 2,
    name: "Zoro",
    designation: "Tester",
    image: "src/assets/profile2.jpeg",
  },
  {
    id: 3,
    name: "Sanji",
    designation: "Designer",
    image: "src/assets/profile3.jpg",
  },
];

const ProfileCard = () => {
  // const animation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="container mx-auto p-4 sm:p-4 md:p-4 lg:p-4 xl:p-4"
      id="triumph"
    >
      {/* <ScrollAnimationWrapper>
        <motion.div
          className="pt-8 sm:pt-12 lg:pt-6 gap-4 sm:gap-8 lg:gap-12"
          variants={animation}
        > */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 md:gap-12 p-2">
            {CardsData.map(({ id, name, designation, image }) => {
              return (
                <Card
                  className="w-full sm:w-80 md:w-auto hover:scale-105 duration-200"
                  key={id}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <CardHeader
                    floated={false}
                    className="h-64 sm:h-80"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <img
                      src={image}
                      alt="profile-picture"
                      className="object-cover w-full h-full"
                    />
                  </CardHeader>
                  <CardBody
                    className="text-center"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className="mb-2"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {name}
                    </Typography>
                    <Typography
                      color="blue-gray"
                      className="font-medium"
                      textGradient
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {designation}
                    </Typography>
                  </CardBody>
                  <CardFooter
                    className="flex justify-center gap-3 sm:gap-5 pt-2"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <Tooltip content="Message">
                      <Typography
                        as="a"
                        href="#facebook"
                        variant="lead"
                        color="blue"
                        textGradient
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <PiMicrosoftTeamsLogoDuotone className="text-primary" />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Mail">
                      <Typography
                        as="a"
                        href="#twitter"
                        variant="lead"
                        color="light-blue"
                        textGradient
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <PiMicrosoftOutlookLogoDuotone className="text-primary" />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                      <Typography
                        as="a"
                        href="#instagram"
                        variant="lead"
                        color="purple"
                        textGradient
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                      >
                        <PiLinkedinLogoDuotone className="text-primary" />
                      </Typography>
                    </Tooltip>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        {/* </motion.div>
      </ScrollAnimationWrapper> */}
    </div>
  );
};

export default ProfileCard;
