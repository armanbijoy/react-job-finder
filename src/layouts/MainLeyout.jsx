import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Navbar from '../components/Navbar';

const MainLeyout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Renders the child routes */}
    </>
  );
};

export default MainLeyout;
