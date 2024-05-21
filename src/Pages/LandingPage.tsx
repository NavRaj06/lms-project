import About from "../Components/About";
import CoursesCard from "../Components/CoursesCard";
import Feature from "../Components/Feature";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import ProfileCard from "../Components/ProfileCard";
import ScrollToTop from "../Components/ScrollToTop";
import SubHero from "../Components/SubHero";

const LandingPage = () => {
  return (
    <>
      <div className=" bg-[url('src/assets/MainBg.jpg')] ">
        <NavBar />
        <About />
      </div>
      <SubHero />
      <Feature />
      <div
        className="justify-center border p-10 mb-10 bg-blue-gray-50"
        id="courses"
      >
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-medium leading-normal mb-4 sm:mb-6 lg:mb-8">
          <strong className="text-primary"> Courses</strong>
        </h1>
        <CoursesCard />
      </div>
      <div className="justify-center p-10 mb-10">
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-medium leading-normal mb-4 sm:mb-6 lg:mb-8">
          <strong className="text-primary">Triumph</strong>
        </h1>
        <ProfileCard />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default LandingPage;
