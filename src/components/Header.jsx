import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className=" absolute px-10 py-2 z-10 flex justify-between w-full">
      <img
        className="w-56"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && <div className="flex items-center gap-4">
        <img
          className="w-12 h-12 rounded-lg"
          src={user?.photoURL}
          alt="user-icon"
        />
        <button
          onClick={handleSignOut}
          className="text-gray-500 font-medium cursor-pointer"
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
