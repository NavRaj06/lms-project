import About from "../Components/About";
import CoursesCard from "../Components/CoursesCard";
import Feature from "../Components/Feature";
import ProfileCard from "../Components/ProfileCard";
import SubHero from "../Components/SubHero";
import mainBg from "../assets/Images/MainBg.jpg";

const LandingPage = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${mainBg})` }} className="bg-cover">
        {/* <NavBar /> */}
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
    </>
  );
};

export default LandingPage;
