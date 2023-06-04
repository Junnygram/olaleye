import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Testimonial from './Testimonial';
import Demo from './Demo';
import SecHome from './SecHome';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <SecHome />
      <About />
      <Testimonial />
      <Demo />
    </div>
  );
};

export default HomePage;
