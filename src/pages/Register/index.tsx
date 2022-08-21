import React from "react";
import register_img from "images/florian-klauer.jpg";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Routes, Route } from "react-router-dom";
const Register = () => {
  return (
    <div className="flex h-screen">
      <div className="w-5/12 overflow-hidden">
        <img
          src={register_img}
          alt="writing machin"
          className="transform scale-125 -translate-y-32"
        />
      </div>
      <div className="w-7/12 flex flex-col items-center">
        <Routes>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
};
export default Register;
