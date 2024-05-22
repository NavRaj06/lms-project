const courseData = [
  {
    id: 1,
    img: "https://via.placeholder.com/300?text=Web+Development",
    title: "Web Development Fundamentals",
    description:
      "Learn the basics of web development including HTML, CSS, and JavaScript.",
    type: "webdevelopment",
    level: "intermediate",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    title: "React.js Crash Course",
    description:
      "A quick dive into React.js library for building modern web applications.",
    type: "webdevelopment",
    level: "easy",
  },
  {
    id: 3,
    img: "https://via.placeholder.com/300?text=Node.js",
    title: "Node.js Essentials",
    description:
      "Get started with server-side development using Node.js and Express framework.",
    type: "backend",
    level: "intermediate",
  },
  {
    id: 4,
    img: "https://via.placeholder.com/300?text=Software+Testing",
    title: "Software Testing Principles",
    description:
      "Learn the fundamental principles and techniques of software testing.",
    type: "testing",
    level: "easy",
  },
  {
    id: 5,
    img: "https://via.placeholder.com/300?text=Automated+Testing",
    title: "Automated Testing with Selenium",
    description: "Master automated testing using Selenium WebDriver and Java.",
    type: "testing",
    level: "difficult",
  },
  {
    id: 6,
    img: "https://via.placeholder.com/300?text=Performance+Testing",
    title: "Performance Testing in Practice",
    description:
      "Discover how to effectively conduct performance testing for web applications.",
    type: "testing",
    level: "easy",
  },
  {
    id: 7,
    img: "https://via.placeholder.com/300?text=Database+Design",
    title: "Introduction to Database Design",
    description:
      "Learn the principles of database design and normalization for efficient data storage.",
    type: "database",
    level: "easy",
  },
  {
    id: 8,
    img: "https://via.placeholder.com/300?text=RESTful+API",
    title: "RESTful API Development",
    description: "Build RESTful APIs using Node.js, Express, and MongoDB.",
    type: "backend",
    level: "easy",
  },
  {
    id: 9,
    img: "https://via.placeholder.com/300?text=Authentication+and+Authorization",
    title: "Authentication and Authorization in Web Apps",
    description:
      "Implement secure authentication and authorization mechanisms in web applications.",
    type: "backend",
    level: "intermediate",
  },
  {
    id: 10,
    img: "https://via.placeholder.com/300?text=Advanced+JavaScript",
    title: "Advanced JavaScript Techniques",
    description:
      "Explore advanced JavaScript concepts such as closures, prototypes, and async/await.",
    type: "webdevelopment",
    level: "difficult",
  },
  {
    id: 11,
    img: "https://via.placeholder.com/300?text=Mobile+App+Testing",
    title: "Mobile App Testing Strategies",
    description:
      "Learn effective strategies and tools for testing mobile applications on various platforms.",
    type: "testing",
    level: "difficult",
  },
  {
    id: 12,
    img: "https://via.placeholder.com/300?text=Scalable+Backend",
    title: "Scalable Backend Architecture",
    description:
      "Design scalable backend architectures using microservices and serverless technologies.",
    type: "backend",
    level: "difficult",
  },
  {
    id: 13,
    img: "https://via.placeholder.com/300?text=Frontend+Performance",
    title: "Frontend Performance Optimization",
    description:
      "Optimize frontend performance using techniques like code splitting and lazy loading.",
    type: "webdevelopment",
    level: "difficult",
  },
];

const categoryData = [
  { value: "allCategory", label: "All Category" },
  { value: "webdevelopment", label: " Web Development" },
  { value: "backend", label: " Backend" },
  { value: "testing", label: " Testing" },
  { value: "database", label: " Database" },
];

const courseLevel = [
  { value: "allLevel", label: "All Level" },
  { value: "easy", label: "Easy" },
  { value: "intermediate", label: "Intermediate" },
  { value: "difficult", label: "Difficult" },
];

const courseFilters = [
  { value: "new", label: "New" },
  { value: "old", label: "Old" },
  { value: "topRated", label: "Top Rated" },
  { value: "lowRated", label: "Low Rated" },
];
export { courseData, categoryData, courseLevel, courseFilters };
