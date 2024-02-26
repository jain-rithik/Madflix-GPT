import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <div className="w-full absolute bottom-0 bg-black/60 text-white flex flex-col gap-10 py-14 px-[15%]">
        <div>Questions? Call 000-800-919-1694</div>
        <ul className="flex justify-start flex-wrap text-sm text-gray-300 underline">
          <li className="w-36 h-8 text-sm sm:w-64 sm:h-12">
            <span className="cursor-pointer">FAQ</span>
          </li>
          <li className="w-36 h-8 text-sm sm:w-64 sm:h-12">
            <span className="cursor-pointer">Help Centre</span>
          </li>
          <li className="w-36 h-8 text-sm sm:w-64 sm:h-12">
            <span className="cursor-pointer">Terms of Use</span>
          </li>
          <li className="w-36 h-8 text-sm sm:w-64 sm:h-12">
            <span className="cursor-pointer">Privacy</span>
          </li>
          <li className="w-36 h-8 text-sm sm:w-64 sm:h-12">
            <span className="cursor-pointer">Cookie Preferences</span>
          </li>
          <li className="w-36 h-8 text-sm sm:w-64 sm:h-12">
            <span className="cursor-pointer">Corporate Information</span>
          </li>
        </ul>
        <div>
          <select name="language" id="language" className="bg-gray-800 border p-2 rounded-sm">
            <option lang="en" label="English" value="en-IN" selected>
              English
            </option>
            <option lang="hi" label="हिन्दी" value="hi-IN">
              हिन्दी
            </option>
            <option lang="mr" label="मराठी" value="mr-IN">
              मराठी
            </option>
          </select>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
