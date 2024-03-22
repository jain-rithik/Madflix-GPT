import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkSignInData, checkSignUpData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/slices/userSlice";
import Footer from "./Footer";
import { BANNER_IMG, USER_AVTAR } from "../utils/constants/constants";
import lang from "../utils/constants/languageConstants";
import { toast } from "react-toastify";
import { setForgotPass } from "../utils/slices/configSlice";
import ForgotPass from "./ForgotPass";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const forgotPass = useSelector((store) => store.config.forgotPass);
  const [showPass, setShowPass] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleBtnClick = (e) => {
    //validate form data
    let message = null;

    if (isSignInForm) {
      message = checkSignInData(email.current.value, password.current.value);
      setErrorMsg(message);
      if (message) return;

      toast.loading("Please wait...");
      e.target.disabled = true;

      //Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          toast.dismiss();
          toast.success("Welcome to MadflixGPT!!");
          e.target.disabled = false;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.dismiss();
          toast.error(errorMessage);
          e.target.disabled = false;

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

      e.target.disabled = true;
      toast.loading("Please wait...");

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
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            toast.dismiss();
            toast.success("Welcome to MadflixGPT!!");
            e.target.disabled = false;
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode + "-" + errorMessage);
          setErrorMsg(errorCode);
          toast.dismiss();
          toast.error(errorCode);
          e.target.disabled = false;
        });
    }
  };

  useEffect(() => {
    const handle = () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
    };
    window.addEventListener("scroll", handle);
    console.log("scroll");

    return () => window.removeEventListener("scroll", handle);
  }, []);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleForgotPass = () => {
    const scrollY =
			document.documentElement.style.getPropertyValue("--scroll-y");
		const body = document.body;
		body.style.position = "fixed";
		body.style.width = "100vw";
		body.style.top = `-${scrollY}`;
    dispatch(setForgotPass(true));
  };

  return (
    <div>
      <Header />
      {forgotPass && (
        <div className="fixed top-0 backdrop-blur-sm w-full h-full z-30 flex items-center justify-center">
          <ForgotPass />
        </div>
      )}
      <div className="w-full  overflow-hidden bg-gradient-to-t from-black via-transparent to-black">
        <img
          className="relative w-full h-[170vh] sm:h-[180vh] md:h-[165vh] -z-10 object-cover md:object-fill"
          src={BANNER_IMG}
          alt="banner"
        />
      </div>
      <div className="w-full flex justify-center absolute top-28 md:top-20">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4 w-[450px] rounded-md bg-black/60 px-8 sm:px-20 py-12 text-white"
        >
          <h1 className="font-bold text-3xl text-white mb-4">
            {isSignInForm ? lang[langKey].signIn : lang[langKey].signUp}
          </h1>
          {!isSignInForm && (
            <input
              ref={fullName}
              type="text"
              placeholder={lang[langKey].fullName}
              className="rounded-md w-full h-full p-4 font-semibold bg-black/50 border border-gray-200/50"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder={lang[langKey].emailAddress}
            className=" rounded-md w-full h-full p-4 font-semibold bg-black/50 border border-gray-200/50"
          />
          <div className="relative">
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-5 text-gray-200/50 cursor-pointer "
            >
              {showPass ? (
                <i class="fa-regular fa-eye-slash"></i>
              ) : (
                <i class="fa-regular fa-eye"></i>
              )}
            </span>

            <input
              ref={password}
              type={showPass ? "text" : "password"}
              placeholder={lang[langKey].password}
              className="rounded-md w-full h-full p-4 font-semibold bg-black/50 border border-gray-200/50"
            />
          </div>
          <p className="text-red-500 text-lg">{errorMsg}</p>

          <button
            className="p-2 my-2 rounded-sm w-full bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-800"
            onClick={(e) => handleBtnClick(e)}
          >
            {isSignInForm ? lang[langKey].signIn : lang[langKey].signUp}
          </button>
          {isSignInForm && (
            <p
              onClick={handleForgotPass}
              className="text-center cursor-pointer font-semibold"
            >
              {lang[langKey].forgotPass.forgot}
            </p>
          )}
          <p className="text-gray-300/80">
            {isSignInForm
              ? lang[langKey].newToNetflix
              : lang[langKey].alreadyRegistered}{" "}
            <b
              onClick={toggleSignInForm}
              className="text-white font-bold cursor-pointer hover:underline"
            >
              {isSignInForm ? lang[langKey].signUpNow : lang[langKey].signIn}
            </b>
          </p>
          <p className="font-light text-sm text-gray-300/80 md:mb-20">
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
