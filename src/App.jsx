import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./Sections/Hero/Hero";
import Login from "./Sections/Login/Login";
import Checkout from "./Sections/Checkout/Checkout";
import { auth } from "./firebase/firebase";
import { useContextState } from "./context/ContextProvider";
import { useEffect } from "react";
import Payment from "./Sections/Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
function App() {
  const promise = loadStripe(
    "pk_test_51Nwxh7I1IauvQiLYpihkqJA8eLnf0EBKzZfJklfB5i9LRshlgfUFOYRJ6vH10uDOZLY99gtGZoV5gszVcXEGPQT600JG0MychQ"
  );

  const [{ state, User }, dispatch] = useContextState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log("THE_USER_IS", user);
      if (user) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // the user was logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
