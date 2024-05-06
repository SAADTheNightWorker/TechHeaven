import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex items-center text-[#fff] flex-wrap justify-between max-md:justify-center gap-8">
      <a href="#">
        <img
          src="../../../public/logo-White.svg"
          alt="logo"
          className="mb-10"
        />
      </a>

      <div className="">
        <h2 className="text-[16px] max-md:translate-y-4 mb-4 animate-bounce font-['poppin', font-serif] -translate-y-4 text-center ">
          Commponey Trade Mark <br />
          <span className="text-gray-400">
            {new Date().getFullYear().toString()} &copy; All Right Reseved
          </span>
        </h2>
      </div>
      <div className="mb-10">
        <ul className="flex gap-5 animate-pulse">
          <li>
            <a href="#">
              <img src="../../../public/footer/twitter.svg" alt="twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../../../public/footer/facebook.svg" alt="facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../../../public/footer/instagram.svg" alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
