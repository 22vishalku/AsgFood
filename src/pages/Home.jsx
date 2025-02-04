import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // To get the state from LocationPage
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Join from "../components/Join";
import FoodItems from "../components/FoodItems";
import Features from "../components/Features";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
  const location = useLocation(); // Retrieve location state passed from LocationPage
  const [showPopup, setShowPopup] = useState(false); // Controls popup visibility
  const [message, setMessage] = useState(""); // Store the message to display

  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message); // Set message from location state
      setShowPopup(true); // Show the popup

      // Hide the popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  }, [location]); // Only run this effect when location changes

  return (
    <>
      <Navbar />
      <Hero />
      <Join />
      <FoodItems />
      <Features />
      <Team />
      <FAQ />
      <Footer />

      {/* Popup Notification at the top */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-3 z-50">
          <p className="font-semibold">{message}</p>
        </div>
      )}
    </>
  );
};

export default Home;
