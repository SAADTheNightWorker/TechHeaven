import React from "react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useContextState } from "../../context/ContextProvider";
import { auth } from "../../firebase/firebase";

const Header = () => {
  const [{ basket, User }, dispatch] = useContextState();
  console.log(User);

  const HandelAuthentication = () => {
    if (User) {
      auth.signOut();
    }
  };
  return (
    <header className="w-full bg-white p-5 font-semibold">
      <nav className="flex justify-between flex-wrap">
        <div className="w-28 hover:w-36 duration-300 animate-pulse">
          <Link to={`/`}>
            <img src="../../../public/logo-black.svg" alt="logo" />
          </Link>
        </div>
     
     
        {User ? (
          <p className="text-sm text-gray-500 font-poppins border-b ">
            {User.email} <span className="animate-pulse">&#128516;</span>
          </p>
        ) : (
          <p className="text-sm text-gray-500 font-poppins border-b">Gust Account <span className="animate-pulse">&#128578;</span></p>
        )}
       
      
        <div className="flex justify-center text-[14px]">
          <ul className="flex gap-4 max-sm:mr-0 mr-20 items-center">
            <li className="hover:text-[17px] hover:duration-300 ease-out hover:text-gray-400">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="hover:text-[17px] hover:duration-300 ease-out hover:text-gray-400">
              <Link to={`/checkout`}>Shop</Link>
            </li>
            <li
              className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-[#fff] p-2 w-16 text-center rounded-md 
             hover:bg-gray-300/50 hover:from-purple-500 hover:to-pink-500 hover:transition-all hover:duration-500 
             cursor-pointer"
            >
              {User ? (
                <button onClick={HandelAuthentication}>SignOut</button>
              ) : (
                <Link to={`/login`}>Sign In</Link>
              )}
            </li>
            <li className="mx-2 hover:mb-2 hover:duration-300 ease-out cursor-pointer">
              <Link to={`/checkout`}>
                <AddShoppingCartOutlinedIcon className="text-secondary hover:text-gray-400" />
              </Link>
              <strong className="text-gray-500 animate-pulse">
                {" "}
                {basket.length}
              </strong>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
