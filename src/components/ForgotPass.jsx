import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/constants/languageConstants";
import { setForgotPass } from "../utils/slices/configSlice";
import { checkForgotPassData } from "../utils/validate";
import { useRef } from "react";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../utils/firebase";

const ForgotPass = () => {
  const email = useRef(null);
  const [errMsg, setErrMsg] = useState(null);
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const handleCancelBtn = () => {
    const body = document.body;
    const scrollY = body.style.top;
		body.style.position = "";
		body.style.width = "100vw";
		body.style.top = ``;
    window.scrollTo(0, parseInt(scrollY || "0") * -1);

    dispatch(setForgotPass(false));
  };

  const handleFogotBtn = (e) => {
    const message = checkForgotPassData(email.current.value);
    setErrMsg(message);
    if (message) return;

    toast.loading("Wait for message to be sent");
    e.target.disabled = true;

    sendPasswordResetEmail(auth, email.current.value, {
      url: "http://localhost:3000",
    })
      .then(() => {
        // Password reset email sent!
        toast.dismiss();
        toast.success("password reset email sent");
        const body = document.querySelector("body");
        body.style.position = "";
        e.target.disabled = false;
        dispatch(setForgotPass(false));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMsg(errorCode);
        toast.dismiss();
        toast.error("Error:" + errorCode);
        e.target.disabled = false;
      });
  };

  return (
    <div className="relative bg-black mx-auto max-h-80 w-[95%] max-w-[450px] sm:w-[80%] md:w-1/2 rounded-lg aspect-video border border-gray-400 flex justify-center items-center text-white">
      <div className="flex flex-col gap-5 m-3 w-[80%]">
        <h4 className="text-center text-2xl font-bold my-2 mb-1">
          {lang[langKey].forgotPass.reset}
        </h4>
        <div className="flex flex-col gap-3 justify-between items-center w-full">
          <input
            ref={email}
            type="email"
            className="outline-none rounded-md w-full h-full p-3 font-semibold bg-black/50 border border-gray-200/50"
            placeholder={lang[langKey].emailAddress}
          />
          {errMsg && <p className="text-red-500 h-3 -mt-1">{errMsg}</p>}
          <div className="flex justify-between items-center w-full gap-5">
            <button
              onClick={handleCancelBtn}
              type="submit"
              className="rounded-sm p-2 my-1 bg-green-600 hover:bg-green-700 "
            >
              {lang[langKey].forgotPass.cancel}
            </button>
            <button
              onClick={handleFogotBtn}
              type="submit"
              className="rounded-sm p-2 my-1 bg-red-600 hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-800"
            >
              {lang[langKey].forgotPass.send}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
