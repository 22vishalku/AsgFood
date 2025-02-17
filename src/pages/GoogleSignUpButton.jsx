import React, { useEffect } from "react";

const GoogleSignUpButton = () => {
  useEffect(() => {
    // Initialize the Google Sign-In library
    window.google?.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID", // Replace with your actual Client ID
      callback: handleCallbackResponse, // Define how to handle responses
    });
  }, []);

  // Handle Google Sign-In response
  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID Token:", response.credential);
    
    // Send token to backend (optional)
    // fetch("https://your-backend-endpoint/api/google-signin", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ token: response.credential }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log("User Info:", data));
  };

  // Trigger the Google Sign-In dialog
  const handleSignIn = () => {
    window.google?.accounts.id.prompt();
  };

  return (
    <button
      onClick={handleSignIn}
      className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black">
      <span className="inline-block mr-2">
        <svg
          className="w-6 h-6 text-rose-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
        </svg>
      </span>
      Sign up with Google
    </button>
  );
};

export default GoogleSignUpButton;
