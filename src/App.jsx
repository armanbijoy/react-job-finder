import React from "react";
import HomePage from "./pages/HomePage";
import MainLeyout from "./layouts/MainLeyout";
import JobPages from "./pages/JobPages";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, {jobLoader} from "./pages/JobPage";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLeyout />}> {/* Use JSX syntax here */}
      <Route index element={<HomePage />} />
      <Route path="/job" element={<JobPages/>} />
      <Route path="/job/:id" element={<JobPage/>} loader={jobLoader} />
      <Route path="*" element={<NotFoundPage/>} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
