import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import { About } from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What We Offer" subTitle="Our Programs" />
        <Programs />
        <About></About>
        <Title title="Campus Photos" subTitle="Gallery" />
        <Campus />
        <Title title="What Student Says " subTitle="Testimonials" />
        <Testimonials />
        <Title title="Get In Touch" subTitle="Contact Us" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
