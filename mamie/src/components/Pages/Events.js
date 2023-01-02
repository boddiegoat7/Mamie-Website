import React from "react";
import "../../App.css";
import Cards from "../Cards/EventCards";
import EventSection from "../PageSection/PageSection";
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
