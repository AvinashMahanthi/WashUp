import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Info from "../components/Info";

import { homeObjOne, homeObjTwo, homeObjThree } from "../components/Info/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar />
      <Hero />

      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      {/* <Services /> */}

      <Info {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
