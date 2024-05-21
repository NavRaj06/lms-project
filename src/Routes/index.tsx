import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Route";

const Index = () => {
  return (
    <Routes>
      {publicRoutes.map((route: any, idx: any) => (
        <Route
          path={"/lms-project" + route.path}
          element={route.component}
          key={idx}
        />
      ))}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default Index;
