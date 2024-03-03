import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/configSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import lang from "../utils/languageConstants";

const Footer = () => {
  const dispatch = useDispatch();
  const langKey = useSelector(store => store.config.lang);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="relative">
      <div className="w-full absolute bottom-0 bg-black/60 text-white flex flex-col gap-10 py-14 px-[15%]">
        <div>{lang[langKey].footer.questionsCall}</div>
        <ul className="flex justify-start flex-wrap text-sm text-gray-300 underline">
          <li className="w-36 h-8 text-sm sm:w-64 sm:h-12">
            <span className="cursor-pointer">{lang[langKey].footer.faq}</span>
          </li>
          <li className="w-36 h-8 text-sm sm:w-64 sm:h-12">
            <span className="cursor-pointer">{lang[langKey].footer.helpCenter}</span>
          </li>
          <li className="w-36 h-8 text-sm sm:w-64 sm:h-12">
            <span className="cursor-pointer">{lang[langKey].footer.termsOfUse}</span>
          </li>
          <li className="w-36 h-8 text-sm sm:w-64 sm:h-12">
            <span className="cursor-pointer">{lang[langKey].footer.privacy}</span>
          </li>
          <li className="w-36 h-8 text-sm sm:w-64 sm:h-12">
            <span className="cursor-pointer">{lang[langKey].footer.cookiePreferences}</span>
          </li>
          <li className="w-36 h-8 text-sm sm:w-64 sm:h-12">
            <span className="cursor-pointer">{lang[langKey].footer.corporateInformation}</span>
          </li>
        </ul>
        <div>
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
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
