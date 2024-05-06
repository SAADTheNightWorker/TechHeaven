const functions = require("firebase-functions");
const express = require("express"); // Corrected import
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Nwxh7I1IauvQiLYQXOVrJE69yb1h5ghEQUbj9RxhjFM4ZewRp3GXyfVCtOJ6HtbimDmY83MNCLk5lvsIc77JpnN00AFQT1z0E"
);

const app = express(); // Corrected app declaration

app.use(cors({ origin: true }));
app.use(express.json()); // Added express.json() middleware

app.get("/", (req, res) => res.status(200).send("helloWord"));

app.post("/payments/create", async (req, res) => {
 
    console.log("secret", total)
    const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
