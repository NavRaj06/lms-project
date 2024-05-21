import { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import cloud from "../assets/Images/cloud.png";
import ProfileComponent from "./ProfileComponent";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <div
      className={`fixed z-30 min-w-full bg-black grid grid-flow-col px-6 py-4 sm:grid-flow-dense ${
        scrollActive ? "shadow-md pt-4" : " pt-4"
      }`}
    >
      <div className="col-start-1 col-end-2 justify-center">
        <img src={cloud} alt="logo" className="h-9 w-auto" />
      </div>
      <div className="col-start-2 col-end-8 text-white flex justify-end">
        <ul className="hidden lg:flex col-start-4 col-end-8 text-white  items-center">
          <LinkScroll
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("about");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "about"
                ? " text-orange-500 animation-active "
                : " text-black-500 hover:text-orange-500 a")
            }
          >
            About
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            to="feature"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("feature");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "feature"
                ? " text-orange-500 animation-active "
                : " text-black-500 hover:text-orange-500 ")
            }
          >
            Feature
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            to="courses"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("courses");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "courses"
                ? " text-orange-500 animation-active "
                : " text-black-500 hover:text-orange-500 ")
            }
          >
            Courses
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            to="triumph"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("triumph");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "triumph"
                ? " text-orange-500 animation-active "
                : " text-black-500 hover:text-orange-500 ")
            }
          >
            Triumph
          </LinkScroll>
        </ul>
      </div>
      {/* <div className="col-start-8 col-end-10 ">
      </div> */}
      <div className="col-start-10 col-end-12 text-white">
        <ProfileComponent />
      </div>
    </div>
  );
};

export default NavBar;
