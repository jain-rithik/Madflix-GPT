import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import {
  clearMovieResults,
  setHomePage,
  setSearchBtnClicked,
  toggleGPTSearchView,
} from "../utils/gptSlice";
import { changeLanguage, setOtherURL } from "../utils/configSlice";
import lang from "../utils/languageConstants";
import logo from "../assets/logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const langKey = useSelector((store) => store.config.lang);
  const otherURL = useSelector((store) => store.config.otherURL);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const [showNavItems, setShowNavItems] = useState(false);
  const sm_screen_class =
    "w-40 bg-black/90 absolute flex flex-col right-0 top-11 gap-3 rounded-lg border p-4 border-gray-300 items-center";

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        if (window.location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribed when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    if (showGPTSearch === true) {
      dispatch(clearMovieResults());
      dispatch(setSearchBtnClicked(false));
    }
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const toggleNavItems = () => {
    setShowNavItems((prevShowNavItems) => !prevShowNavItems);
  };

  return (
    <div className="absolute md:px-10 md:py-2 p-4 md:pt-8 z-10 flex items-center justify-between w-full bg-gradient-to-b from-black from-50% ">
      <Link
        to="/"
        onClick={() => {
          dispatch(setHomePage());
          dispatch(setOtherURL(false));
        }}
      >
        <img
          className="md:w-60 w-[50vw] max-w-60 mx-auto md:mx-0 cursor-pointer"
          src={logo}
          alt="logo"
        />
      </Link>
      {user && (
        <div className="relative">
          <label
            for="nav_bar_icon"
            class="w-8 h-8 cursor-pointer flex flex-col items-center justify-center space-y-1.5 md:hidden"
          >
            <input
              onClick={toggleNavItems}
              checked={showNavItems}
              id="nav_bar_icon"
              type="checkbox"
              class="hidden peer"
            />
            <div class="w-2/3 h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[-30deg] peer-checked:translate-y-[-5px]"></div>
            <div class="w-full h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-center peer-checked:rotate-90 peer-checked:translate-x-4"></div>
            <div class="w-2/3 h-1.5 bg-purple-400 rounded-lg transition-all duration-300 origin-right peer-checked:w-full peer-checked:rotate-[30deg] peer-checked:translate-y-[5px]"></div>
          </label>

          <div
            className={
              "md:flex md:items-center md:gap-4 md:justify-between" +
              (showNavItems ? " " + sm_screen_class : " hidden")
            }
          >
            <span className="text-white font-semibold text-lg text-center">
              {lang[langKey].welcome}, {user?.displayName}
            </span>

            {otherURL ? (
              <Link to={"/browse"}>
                <button
                  onClick={() => {
                    dispatch(setOtherURL(false));
                    setShowNavItems(false);
                  }}
                  className="bg-purple-800 text-white px-4 py-1.5 md:w-auto w-28 md:text-lg rounded-md"
                >
                  {lang[langKey].home}
                </button>
              </Link>
            ) : (
              <>
                {showGPTSearch && (
                  <select
                    className="bg-gray-900 text-white p-2 m-2 md:w-auto w-28 rounded-md outline-none"
                    onChange={handleLanguageChange}
                    value={langKey}
                  >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <option key={lang.identifier} value={lang.identifier}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                )}
                <button
                  onClick={() => {
                    handleGPTSearchClick();
                    setShowNavItems(false);
                  }}
                  className="bg-purple-800 text-white px-4 py-1.5 md:w-auto w-28 h-9 md:text-lg rounded-md"
                >
                  {showGPTSearch ? lang[langKey].home : "GPT Search"}
                </button>
              </>
            )}

            <button
              onClick={() => {
                handleSignOut();
                setShowNavItems(false);
              }}
              className="group flex items-center justify-evenly rounded-lg md:justify-start md:w-11 md:h-11 bg-red-600 md:rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg md:hover:w-32 w-[112px] h-9 hover:rounded-lg active:translate-x-1 active:translate-y-1"
            >
              <div className="flex items-center justify-center md:w-full md:transition-all md:duration-300 md:group-hover:justify-start md:group-hover:px-3">
                <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>
              <div className="md:absolute md:right-5 md:transform md:translate-x-full md:opacity-0 text-white text-lg md:font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Logout
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
