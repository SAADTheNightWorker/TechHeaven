import React, { useEffect, useState } from "react";
import { useContextState } from "../../context/ContextProvider"; // Import ContextState instead of useContextState
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import PaymentPrice from "./PaymentPrice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [proceeding, setProceeding] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // Initialize errorMessage state
  const [clientSecret, setClientSecret] = useState(""); // Initialize clientSecret state with an empty string
  const navigate = useNavigate();
  const [{ basket, User }] = useContextState(); // Destructure basket and User directly from ContextState

  useEffect(() => {
    // Fetch clientSecret when component mounts
    const getClientSecret = async () => {
      const response = await axios.post("/create-intent");
      setClientSecret(response.data.client_secret);
    };
    getClientSecret();
  }, []); // Run this effect only once, on component mount

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProceeding(true); // Set proceeding to true while processing payment

    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setProceeding(false); // Reset proceeding to false after processing payment
      return;
    }

    setSucceeded(true);
    setProceeding(false); // Reset proceeding to false after processing payment
    // Redirect to success page or handle success scenario
    navigate("/success");
  };

  const totalPrice = basket.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-xl font-semibold text-gray-500 text-center mt-10">
        Payment Section
      </h1>

      <div className="flex text-gray-400 flex-col justify-center items-center mt-20">
        <div className="flex gap-2 my-5">
          <label className="font-semibold">Email :</label>
          <p>
            {User ? (
              User.email
            ) : (
              <span className="text-red-400 animate-ping">Loading...</span>
            )}
          </p>
        </div>

        <div className="flex gap-2">
          <label className="font-semibold">UserId :</label>
          <p>
            {User ? (
              User.uid
            ) : (
              <span className="text-red-400 animate-ping">Loading...</span>
            )}
          </p>
        </div>

        <div className="flex gap-2 my-3">
          <label className="font-semibold">SubTotal :</label>
          <p className="font-semibold text-red-500">{totalPrice.toFixed(2)}</p>
        </div>
      </div>

      <div className="w-[80%] mx-auto">
        <form
          onSubmit={handleSubmit}
          className=" w-full border border-red-500 rounded-lg p-6 mt-10"
        >
          <CardElement />
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <button
            type="submit"
            disabled={proceeding || succeeded}
            className="border cursor-pointer border-black font-semibold p-2 m-2 px-4 rounded-md
            hover:bg-black hover:text-white transition-all duration-300"
          >
            {proceeding ? "Processing" : "Buy Now"}
          </button>
        </form>
      </div>
      <div className="w-full border p-10 m-4">
        <div className="border flex justify-between font-bold text-gray-500">
          <p className="ml-16">Products</p>
          <p>Id</p>
          <p>Price</p>
        </div>

        {basket.map((item, index) => (
          <PaymentPrice
            key={index}
            index={index}
            img={item.img}
            text={item.detail}
            length={index}
            id={item.id}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Payment;
