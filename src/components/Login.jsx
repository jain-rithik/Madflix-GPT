import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkSignInData, checkSignUpData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Footer from "./Footer";
import { BANNER_IMG, USER_AVTAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleBtnClick = () => {
    //validate form data
    let message = null;

    if (isSignInForm) {
      message = checkSignInData(email.current.value, password.current.value);
      setErrorMsg(message);
      if (message) return;

      //Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-credential") {
            setErrorMsg("No account found");
          }
        });
    } else {
      message = checkSignUpData(
        fullName.current.value,
        email.current.value,
        password.current.value
      );
      setErrorMsg(message);

      if (message) return;

      //Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: USER_AVTAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="w-full  overflow-hidden bg-gradient-to-t from-black via-transparent to-black">
        <img
          className="relative w-full h-[170vh] sm:h-[180vh] md:h-[165vh] -z-10 object-cover md:object-fill"
          src={BANNER_IMG}
          alt="banner"
        />
      </div>
      <div className="w-full flex justify-center absolute top-24 md:top-20">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4 w-[450px] rounded-md bg-black/60 px-8 sm:px-20 py-12 text-white"
        >
          <h1 className="font-bold text-3xl text-white mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="rounded-md w-full h-full p-4 font-semibold bg-black/50 border border-gray-200/50"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className=" rounded-md w-full h-full p-4 font-semibold bg-black/50 border border-gray-200/50"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="rounded-md w-full h-full p-4 font-semibold bg-black/50 border border-gray-200/50"
          />

          <p className="text-red-500 text-lg">{errorMsg}</p>

          <button
            className="p-2 my-2 rounded-sm w-full bg-red-600"
            onClick={handleBtnClick}
          >
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
          <p className="font-light text-sm text-gray-300/80 mb-20">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <b
              href="#"
              className="text-blue-800 font-semibold hover:underline cursor-pointer"
            >
              Learn more.
            </b>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
