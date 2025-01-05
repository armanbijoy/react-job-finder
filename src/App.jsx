import React from "react";
import HomePage from "./pages/HomePage";
import MainLeyout from "./layouts/MainLeyout";
import JobPage from "./pages/JobPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLeyout />}> {/* Use JSX syntax here */}
      <Route index element={<HomePage />} />
      <Route path="/job" element={<JobPage/>} />
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
