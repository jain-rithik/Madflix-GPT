import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/slices/configSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants/constants";
import lang from "../utils/constants/languageConstants";
import { Link } from "react-router-dom";

const Footer = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="relative">
      <div className="w-full absolute bottom-0 bg-black/60 text-white flex flex-col gap-10 py-14 px-[15%]">
        <div>{lang[langKey].footer.questionsCall}</div>
        <ul className="flex lg:justify-start justify-between flex-wrap text-sm text-gray-300 underline">
          <li className="w-36 h-8 text-sm md:w-64 sm:h-12">
            <span className="cursor-pointer">{lang[langKey].footer.faq}</span>
          </li>
          <li className="w-36 h-8 text-sm md:w-64 sm:h-12">
            <span className="cursor-pointer">
              {lang[langKey].footer.helpCenter}
            </span>
          </li>
          <li className="w-36 h-8 text-sm md:w-64 sm:h-12">
            <span className="cursor-pointer">
              {lang[langKey].footer.termsOfUse}
            </span>
          </li>
          <li className="w-36 h-8 text-sm md:w-64 sm:h-12">
            <span className="cursor-pointer">
              {lang[langKey].footer.privacy}
            </span>
          </li>
          <li className="w-36 h-8 text-sm md:w-64 sm:h-12">
            <span className="cursor-pointer">
              {lang[langKey].footer.cookiePreferences}
            </span>
          </li>
          <li className="w-36 h-8 text-sm md:w-64 sm:h-12">
            <span className="cursor-pointer">
              {lang[langKey].footer.corporateInformation}
            </span>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <select
            className="bg-gray-900 text-white p-2 m-2"
            onChange={handleLanguageChange}
            value={langKey}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <Link target="_blank" to={"https://www.linkedin.com/in/jainrithik/"}>
          <button className="group w-10 hover:w-40 h-10 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
            <svg
              y="0"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              width="100"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              height="100"
              class="w-6 h-6 shrink-0 fill-neutral-50"
            >
              <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
            </svg>
            <span class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
              Rithik Jain
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
