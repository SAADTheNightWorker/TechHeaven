import React, { useState } from "react";
import Pic from "../../../public/hero/hero-2.png";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = async (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("Succesfully signIn",auth);

        if (auth) {
          navigate("/");
        }
      })

      .catch((error) => {
        alert(error.message);
      });
  };

  const Register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // If successfully registered, you can access the user information with userCredential.user
        console.log("Successfully registered:", auth);
          history.push('/')
        // Additional actions after successful registration
      })
      .catch((error) => {
        console.error("Registration error:", error.code, error.message);
        // Handle registration errors
        alert(error.message);
      });
  };

  return (
    <div className="w-full h-[91vh] relative overflow-hidden">
      <form
        className="border max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center min-h-[60vh] max-w-[60vh] max-sm:w-[40vh]
       mx-auto rounded-2xl bg-white border-gray-400 translate-y-24 p-4"
      >
        <h1
          className="font-semibold text-center mt-2 text-2xl m-10
         bg-gradient-to-r from-green-500 via-blue-600 to-pink-400 inline-block text-transparent bg-clip-text"
        >
          Sign In
        </h1>

        <div className="flex flex-col m-4 capitalize font-semibold">
          <h1 className="">Email</h1>

          <input
            type="text"
            name="Email"
            className="border border-gray-500 p-1 max-w-60 m-4 outline-none rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <h1 className="">Password</h1>

          <input
            type="password"
            name="Password"
            className="border p-1 border-gray-400 max-w-60 m-4 outline-none rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          onClick={SignIn}
          className="border-[1px] p-2 max-sm:ml-0 ml-10 px-10 text-[#fff] rounded-lg text-md bg-gradient-to-r from-violet-500 to-fuchsia-500 
          hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:transition-all hover:duration-500 
          cursor-pointer font-semibold"
        >
          Log In
        </button>

        <p
          className="max-w-full m-4 font-medium break-normal max-md:text-center max-xl:text-lg max-md:text-sm
        bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
        >
          By sing-in you agree to 'Tech Haven' conditions of User & Sale.Plese
          see our Privacy Notic, our cokies, Notice and our Intrestde-Based Ads
        </p>
        <div className="flex justify-center items-center">
          <button
            className=" min-w-60 p-2 border-none  
          text-[#fff] rounded-lg text-md hover:bg-[#fff]
          bg-gradient-to-r from-violet-500 to-fuchsia-500 
          hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:transition-all hover:duration-500 
          cursor-pointer
          hover:ease-out font-semibold"
            onClick={Register}
          >
            Create a new Account
          </button>
        </div>
      </form>
      <img
        src={Pic}
        alt=""
        className="-z-10 ml-10 max-sm:hidden h-full w-full mt-10 absolute bottom-0"
      />
    </div>
  );
};

export default Login;
