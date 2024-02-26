import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

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
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribed when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className=" absolute px-10 py-2 z-10 flex justify-between w-full">
      <img
        className="w-56"
        src= {LOGO}
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
