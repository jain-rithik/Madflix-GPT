import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="w-full h-lvh overflow-hidden bg-gradient-to-t from-black via-transparent to-black">
        <img
          className="relative w-full min-h-full -z-10 object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="banner"
        />
      </div>
      <div className="w-full flex justify-center absolute top-20">
        <form className="flex flex-col gap-4 w-1/3 bg-black/60 px-20 py-12 text-white">
          <h1 className="font-bold text-3xl text-white mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && <input
            type="text"
            placeholder="Full Name"
            className="rounded-md w-full h-full p-4 font-semibold bg-black/50 border border-gray-200/50"
          />}
          <input
            type="text"
            placeholder="Email Address"
            className="rounded-md w-full h-full p-4 font-semibold bg-black/50 border border-gray-200/50"
          />
          <input
            type="text"
            placeholder="Password"
            className="rounded-md w-full h-full p-4 font-semibold bg-black/50 border border-gray-200/50"
          />
          <button className="p-2 my-4 rounded-sm w-full bg-red-600">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-300/80">
            {isSignInForm ? "New to Netflix?" : "Already registered?"}{" "}
            <b
              onClick={toggleSignInForm}
              className="text-white font-bold cursor-pointer hover:underline"
            >
              {isSignInForm ? "Sign up now." : "Sign In"}
            </b>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
