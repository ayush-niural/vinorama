import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleLogin = () => {
    // Perform login logic here (e.g., send email, password, and verification code to server for authentication)
    // For simplicity, let's just check if all fields are non-empty
    if (email && password && verificationCode) {
      setIsLoggedIn(true);
      console.log("User logged in!");
    } else {
      console.log("Please enter all required information.");
    }
  };

  return (
    <div>
      <div>
        <div className="flex flex-col gap-6 justify-between mb-4">
          <div className="flex flex-col gap-4">
            <progress
              max="3"
              value={currentStep}
              className="w-full h-2 rounded-full bg-gray-200"
            >
              <div className="h-2 rounded-full bg-red-500"></div>
            </progress>
            <div className="text-gray-500 text-sm ml-2">
              Step {currentStep} of 3
            </div>
          </div>
        </div>
        {isLoggedIn ? (
          <p className="text-center text-green-500">User is logged in.</p>
        ) : (
          <div>
            {currentStep === 1 && (
              <div>
                <input
                  type="text"
                  id="email"
                  placeholder="Type your email..."
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full mb-4 p-2 border border-gray-300 rounded font-normal"
                />
                <button
                  onClick={handleNextStep}
                  className="w-full bg-red-500 text-white py-2 px-4 rounded"
                >
                  Next
                </button>
              </div>
            )}
            {currentStep === 2 && (
              <div>
                <label htmlFor="password" className="block mb-2">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={handleNextStep}
                  className="w-full bg-red-500 text-white py-2 px-4 rounded"
                >
                  Next
                </button>
              </div>
            )}
            {currentStep === 3 && (
              <div>
                <label htmlFor="verificationCode" className="block mb-2">
                  Verification Code:
                </label>
                <input
                  type="text"
                  id="verificationCode"
                  value={verificationCode}
                  onChange={handleVerificationCodeChange}
                  className="w-full mb-4 p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={handleLogin}
                  className="w-full bg-red-500 text-white  py-2 px-4 rounded"
                >
                  Log In
                </button>
              </div>
            )}
            <div className="flex flex-col justify-center text-center mt-4">
              <p>Dont have a profile?</p>
              <p className="text-red-700">Sign Up</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
