import React from "react";
import "../../App.css";
import Cards from "../Cards/Cards";
import EventSection from "../EventSection/EventSection";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <EventSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
