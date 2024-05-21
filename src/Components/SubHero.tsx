import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { 
  // useMemo, 
  useState } from "react";
// import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
// import { motion } from "framer-motion";
import Tab1 from "../assets/Tab1.png";
import Tab2 from "../assets/Tab2.png";
import Tab3 from "../assets/Tab3.png";
import Tab4 from "../assets/Tab4.png";
// import getScrollAnimation from "../utils/getScrollAnimation";

const data = [
  {
    label: "Hands-on training",
    value: "training",
    desc: Tab1,
    icon: "src/assets/hands-on-practice.png",
    description:
      "Upskill effectively with AI-powered coding exercises, practice tests, skills assessments, labs, and workspaces.",
  },
  {
    label: "Certification prep",
    value: "certification",
    desc: Tab2,
    icon: "src/assets/certificate.png",
    description:
      "Upskill effectively with AI-powered coding exercises, practice tests, skills assessments, labs, and workspaces.",
  },
  {
    label: "Insights and analytics",
    value: "insights",
    desc: Tab3,
    icon: "src/assets/empty-state-1.png",
    description:
      "Upskill effectively with AI-powered coding exercises, practice tests, skills assessments, labs, and workspaces.",
  },
  {
    label: "Customizable Content",
    value: "customize",
    desc: Tab4,
    icon: "src/assets/organizations-2.png",
    description:
      "Upskill effectively with AI-powered coding exercises, practice tests, skills assessments, labs, and workspaces.",
  },
];
const SubHero = () => {
  const [activeTab, setActiveTab] = useState("training");
  // const animation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="flex justify-center items-center p-5 md:p-10 mb-10 bg-gray-100">
      {/* <ScrollAnimationWrapper>
        <motion.div
          className="pt-8 sm:pt-12 lg:pt-6 gap-4 sm:gap-8 lg:gap-12"
          variants={animation}
        > */}
          <Tabs value={activeTab} orientation="vertical">
            <div className="flex flex-col mt-24 md:flex-row w-full max-w-6xl p-5">
              <div className="w-full p-5 md:mr-8">
                <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-medium leading-normal mb-4 sm:mb-6 lg:mb-16">
                  See what you can learn with
                  <strong className="text-primary"> LMS</strong>
                </h1>
                <TabsHeader
                  className="flex flex-col space-y-4"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {data.map(({ label, value, icon, description }) => (
                    <Tab
                      key={value}
                      value={value}
                      className={`flex items-start p-4 border-2 border-gray-500 rounded-md hover:border-primary ${
                        activeTab === value ? "bg-gray-100" : ""
                      }`}
                      onClick={() => setActiveTab(value)}
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                        <img
                          src={icon}
                          alt="Icon"
                          className="h-16 w-16 object-cover"
                        />
                        <div className="flex flex-col ml-5 text-left">
                          <p className="text-lg text-black capitalize">
                            {label}
                          </p>
                          <p className="mt-2 text-gray-600">{description}</p>
                        </div>
                      </div>
                    </Tab>
                  ))}
                </TabsHeader>
              </div>
            </div>

            <div className="w-full p-5 flex justify-center items-center">
              <TabsBody
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {data.map(({ value, desc }) => (
                  <TabPanel
                    key={value}
                    value={value}
                    className="flex justify-center py-0"
                  >
                    <img
                      src={desc}
                      alt="Course Preview"
                      className="w-full h-auto rounded-lg"
                    />
                  </TabPanel>
                ))}
              </TabsBody>
            </div>
          </Tabs>
        {/* </motion.div>
      </ScrollAnimationWrapper> */}
    </div>
  );
};

export default SubHero;
