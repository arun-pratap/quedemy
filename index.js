require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");

const exApp = express();

exApp.use(express.json());
exApp.use(cors());

const rzrpy = new Razorpay({
  key_id: process.env.RZRPY_TEST_KEY_ID,
  key_secret: process.env.RZRPY_TEST_KEY_SECRET,
});

//fullstack program
exApp.post("/paymento", async (req, res) => {
  const payment_capture = 1;
  const amount = 9999;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    payment_capture,
  };
  try {
    const response = await rzrpy.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    console.log(err);
  }
});

//dsa mastery
exApp.post("/paymentwo", async (req, res) => {
  const payment_capture = 1;
  const amount = 1499;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    payment_capture,
  };
  try {
    const response = await rzrpy.orders.create(options);

    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    console.log(err);
  }
});

// others basic programmes
exApp.post("/paymenthr", async (req, res) => {
  const payment_capture = 1;
  const amount = 499;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    payment_capture,
  };
  try {
    const response = await rzrpy.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    console.log(err);
  }
});

exApp.get("/", (req, res) => {
  res
    .status(200)
    .send("<h2>✅ Everything is fine here. <br />👍 You are good to go </h2>");
});

// set port and listening
const PORT = process.env.PORT || 3000;
exApp.listen(PORT, () => {
  console.log(`I am here at ${PORT}`);
});
