import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation in React Router v6+
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Phone } from "lucide-react"; // Add icons for location and contact

const LocationPage = () => {
  const [address, setAddress] = useState(""); // State to capture user's address input
  const navigate = useNavigate(); // For navigation to home page after form submission

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (address) {
      // Redirect to the home page with a success message
      navigate("/", {
        state: { message: "Address submitted successfully!" }, // Pass success message
      });
    }
  };

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
                Locate our headquarters or submit your address below.
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

          {/* Address Submission Form */}
          <div className="w-full h-full flex flex-col items-center justify-center px-6 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h3 className="text-2xl font-bold leading-tight text-black sm:text-3xl mb-4">
                Submit Your Location
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="address" className="text-base font-medium text-gray-900">
                    Enter Your Address
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Your Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-yellow px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-black/80 hover:text-white"
                >
                  Submit Address
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LocationPage;
