import React from "react";
import pic1 from "../../../public/categories/watches-category.png";
import pic2 from "../../../public/categories/laptops-category.png";
import pic3 from "../../../public/categories/phones-category.png";
import pic4 from "../../../public/categories/tv-home-category.png";
import pic5 from "../../../public/categories/ipads-category.png";
import asus from "../../../public/categories/asus.png";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";


const Hero = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="relative">
        <img
          src="../../../public/hero/hero-1.png"
          alt="home/logo"
          className="w-[1590px] bg-slate-50 mx-auto h-[670px] max-md:h-[600px] max-sm:h-[200px] rounded-md"
        />

        <div className="absolute max-sm:top-20 top-52 max-md:left-8 max-sm:left-10 left-20">
          <h1 className="text-5xl hover:-rotate-12 duration-300 max-sm:text-2xl max-md:text-4xl font-bold text-left text-gray-400">
            Unleash Innovation <br />
            <span className="tracking-[2px]"> in Every Byte.</span>
          </h1>
          <p className="mt-8 max-sm:text-[12px] animate-pulse text-gray-400 font-medium max-sm:mt-4 text-xl translate-x-2">
            Explore a World of Cutting-Edge Tech
          </p>
          <button
            className="bg-primary text-[#fff] p-3 text-xs rounded-md mt-10 
          max-sm:mt-5 hover:bg-gray-300/50 hover:text-black duration-300"
          >
            Shop Now
          </button>
        </div>

        <div className="h-screen mt-16 w-full mx-auto flex flex-col text-gray-400">
          <div className="flex animate-pulse justify-between items-center font-medium text-2xl  max-sm:text-[10px]">
            <p className="ml-10">Shop by Categories</p>
            <p className="text-sm mr-10  max-sm:text-[8px]">Show All</p>
          </div>

          <div className="flex justify-evenly flex-wrap">
            <Products img={pic1} name="Watch" price={900} detail="watch 200sc" id="253"/>
            <Products img={pic2} name="Laptop" price={900} detail="Laptom 2c series" id="255"/>

            <Products img={pic3} name="Phone" price={900} detail="I phone 14 pro max" id="251"/>
            <Products img={pic4} name="Tv - Home" price={900} detail="Ultra size TV" id="258"/>

            <Products img={pic5} name="Ipad" price={900} detail="I pad x series" id="2512"/>
            <Products img={pic4} name="Tv - Home" price={900} detail="Ultra size TV" id="2543"/>

            <Products img={pic1} name="Watch" price={900} detail="watch 200sc" id="25456"/>
            <Products img={pic2} name="Laptop" price={900} detail="Laptom 2c series" id="25753"/>

            <Products img={asus} name="AsusMonitor" price={900} detail="Asus Wide Monitor full serise" id="25123"/>
          </div>
          <div className="relative h-screen bottom-0 w-full p-10 max-md:hidden">
            <div className="flex justify-center items-center font-medium text-2xl max-sm:text-[10px]">
              <p className="ml-10 animate-pulse">New Categories</p>
            </div>
            <p className="text-gray-600 font-medium mt-10">Showing 1.4 From 15 Products</p>
            <div className="grid grid-cols-4 grid-flow-row">
              <Products img={pic1} name="Watch" price={900} id="250980"/>
              <Products img={pic2} name="Laptop" price={900} id="25999"/>

              <Products img={pic3} name="Phone" price={900} id="25777"/>
              <Products img={pic4} name="Tv - Home" price={900} id="25444"/>
            </div>
          </div>
          <div className="relative top-[5vh] w-full bg-gradient-to-r from-purple-500 to-pink-500 p-10 rounded-md overflow-hidden max-md:overflow-visible">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
