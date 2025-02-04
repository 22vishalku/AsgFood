import React from "react";
import Navbar from "../components/Navbar"; // Make sure this is your Navbar component path
import Footer from "../components/Footer"; // Make sure this is your Footer component path
import { MapPin, Phone } from "lucide-react"; // Add icons for location and contact

const LocationPage = () => {
  return (
    <>
      <Navbar />

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Location Information */}
          <div className="w-full h-full flex flex-col items-center justify-center px-6 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h3 className="text-3xl font-bold leading-tight text-black sm:text-4xl mb-4">
                Find Us Here
              </h3>
              <p className="mt-2 text-lg text-gray-600">
                Locate our headquarters or visit us at your convenience. Here's where we are:
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-yellow" />
                  <p className="text-lg text-gray-600">
                    <strong>Address:</strong> AsgFoods, Law Gate, Kapurthala, Punjab
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-yellow" />
                  <p className="text-lg text-gray-600">
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+919999999999" className="text-blue-600">
                      8228924850
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.789047259862!2d75.38166421564589!3d31.394207661417882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391aa5a9e0af3e73%3A0x53aa80c3a8b50464!2sLaw%20Gate%2C%20Punjab!5e0!3m2!1sen!2sin!4v1635319392056!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="border rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LocationPage;
