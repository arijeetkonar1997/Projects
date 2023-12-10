import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";


const Browse = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between">
      <button
        onClick={handleSignOut}
        className="p-2 m-2 border-black bg-red-600 text-white rounded-sm"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Browse;
