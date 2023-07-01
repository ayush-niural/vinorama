import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { ModalContext } from "../contexts/modal.context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const { handleCloseDialog } = useContext(ModalContext);

  const user = {
    username,
    email,
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    // Perform login logic here (e.g., send email, password, and verification code to server for authentication)
    // For simplicity, let's just check if all fields are non-empty
    e.preventDefault();

    if (username && email && password) {
      setCurrentUser(user);
      console.log(`User logged in!`);
      handleCloseDialog();
    } else {
      console.log("Please enter all required information.");
    }
  };

  return (
    <div>
      <div>
        <div className="grid gap-6 mb-6 md:grid-cols-2"></div>
        {currentUser ? (
          <p className="text-center text-green-500">User is logged in.</p>
        ) : (
          <div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="form-label" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Your Nickname"
                  value={username}
                  onChange={handleUsernameChange}
                  className="input-box"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="form-label" htmlFor="email">
                  Email address
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="john.doe@company.com"
                  value={email}
                  onChange={handleEmailChange}
                  className="input-box"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder="Type your password..."
                  onChange={handlePasswordChange}
                  className="input-box"
                />
              </div>
              <button onClick={handleLogin} className="btn-primary w-full ">
                Login
              </button>
            </div>

            <div className="flex flex-col justify-center gap-4 text-center my-6">
              <div className="flex items-center">
                <hr className="flex-grow border-t-2 border-gray-200" />
                <span className="mx-4 text-gray-500">or</span>
                <hr className="flex-grow border-t-2 border-gray-200" />
              </div>
              <button className="btn-secondary justify-center">
                <svg
                  className="w-4 h-4 mr-2 -ml-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Sign in with Google
              </button>
              <button className="btn-secondary justify-center ">
                <svg
                  className="w-5 h-5 mr-2 -ml-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="apple"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  ></path>
                </svg>
                Sign in with Apple
              </button>
            </div>
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
