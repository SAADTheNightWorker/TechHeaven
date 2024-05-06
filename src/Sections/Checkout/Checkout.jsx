import React from "react";
import Footer from "../Footer/Footer";
import { useContextState } from "../../context/ContextProvider";
import { Link, useNavigate } from "react-router-dom";
import Basket from "./Basket/";

const Checkout = () => {
  const [{ basket }] = useContextState();
const navigate = useNavigate()
  // Calculate total price of items in the basket
  const totalPrice = basket?.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <div
        className={
          basket?.length <= 2
            ? `w-full flex relative h-screen`
            : `w-full flex relative`
        }
      >
        <h1 className="text-xl font-semibold text-gray-700 ml-4">Cart</h1>
        <div className="flex-1 w-72 m-4 mt-10">
          <div className="flex justify-evenly max-sm:hidden font-medium text-gray-700 ">
            <p>Product</p>
            <p>Quantity</p>
          </div>

          <div className="flex flex-col justify-evenly items-center">
            {basket.map((item, index) => (
              <Basket
                key={index}
                index={index}
                img={item.img}
                length={basket.length}
                text={item.detail}
                id={item.id}
              />
            ))}
          </div>
        </div>

        <div className="flex-[.2] w-44 border-l-2 mr-3 p-6 mt-10 h-[66vh]">
          <h2 className="text-sm font-bold">Summary</h2>

          <div className="flex justify-between mt-8">
            <p className="text-sm font-medium">Delivery Charge</p>
            <p>
              Fixed : <strong>Free</strong>
            </p>
          </div>

          <div className="flex justify-between mt-8">
            <p className="text-sm font-medium">Subtotal items</p>
            <p>{basket.length}</p>
          </div>

          <p className="h-[1px] mt-4 w-full bg-gray-300"></p>

          <div className="flex justify-between mt-4 text-sm font-bold">
            <p>Grand Total</p>
            <p>{totalPrice.toFixed(2)}</p>{" "}
            {/* Format total price with 2 decimal places */}
          </div>

          <div className="mt-10 text-center flex flex-col">
            
              <button
              onClick={() => navigate('/payment')}
                className="border rounded-lg text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 max-md:p-1
              hover:bg-gradient-to-t hover:from-purple-500 hover:to-pink-500 transition-all hover:duration-500 cursor-pointer"
              >
                 Procceed to checkout 
              </button>
            
          </div>
        </div>

        <div className="w-full absolute bottom-0 p-3 bg-gradient-to-r from-purple-500 to-pink-500 max-sm:hidden rounded-md">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Checkout;
