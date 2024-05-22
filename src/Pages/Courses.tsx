import { useEffect, useMemo, useState } from "react";
import ScrollAnimationWrapper from "../Components/ScrollAnimationWrapper";
import getScrollAnimation from "../utils/getScrollAnimation";
import { motion } from "framer-motion";
import CustomSelect from "../Components/Common_Components/Select";
import CourseComponent from "../Components/Common_Components/CourseComponent";
import {
  categoryData,
  courseData,
  courseFilters,
  courseLevel,
} from "../utils/Constants";
import Pagination from "../Components/Common_Components/Pagination";

const Courses = () => {
  const animation = useMemo(() => getScrollAnimation(), []);
  const coursesPerPage = 9;
  const [selectedCategory, setSelectedCategory] = useState("allCategory");
  const [selectedCourseLevel, setSelectedCourseLevel] = useState("allLevel");
  const [filteredCourses, setFilteredCourses] = useState(courseData);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedCourses, setPaginatedCourses] = useState<any>([]);

  useEffect(() => {
    const updatedCourses = filterCourses();

    setFilteredCourses(updatedCourses);
    setCurrentPage(1); // Reset to first page on filter change
  }, [selectedCategory, selectedCourseLevel, courseData]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * coursesPerPage;
    const paginated = filteredCourses.slice(
      startIndex,
      startIndex + coursesPerPage
    );
    setPaginatedCourses(paginated);
  }, [currentPage, filteredCourses, coursesPerPage]);

  const filterCourses = () => {
    let filtered = courseData;

    if (selectedCategory !== "allCategory") {
      filtered = filtered.filter((course) => course.type === selectedCategory);
    }

    if (selectedCourseLevel !== "allLevel") {
      filtered = filtered.filter(
        (course) => course.level === selectedCourseLevel
      );
    }

    return filtered;
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCourseLevelChange = (level: string) => {
    setSelectedCourseLevel(level);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
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
            <CustomSelect
              label="Category"
              options={categoryData}
              placeholder="Select Category"
              onChange={handleCategoryChange}
              value={selectedCategory}
            />
            <CustomSelect
              label="Course Level"
              options={courseLevel}
              onChange={handleCourseLevelChange}
              value={selectedCourseLevel}
              placeholder="Select Level"
            />
          </div>
          <div className="mt-4 sm:mt-0 w-full sm:w-auto">
            <CustomSelect
              label="Filters"
              options={courseFilters}
              placeholder="Filters"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCourses.map(({ id, img, description, title }: any) => (
            <CourseComponent
              key={id}
              img={img}
              title={title}
              description={description}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredCourses.length / coursesPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Courses;
