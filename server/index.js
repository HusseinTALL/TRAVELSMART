const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const OfferModel = require("./Models/Offer");

app.use(express.json());

app.use(cors());

app.post("/AddOffer", async (req, res) => {
  const departure = req.body.departure;
  const arrival = req.body.arrival;
  const date = req.body.date;
  const weight = req.body.weight;
  const userId = req.body.userId;

  const offer = new OfferModel({
    departure: departure,
    arrival: arrival,
    date: date,
    weight: weight,
    userId: userId,
  });

  try {
    await offer.save();
    res.send("Inserted Data");
    res.redirect("http://localhost:3000");
  } catch (error) {
    console.log(error);
  }
});

mongoose.connect(
  "mongodb+srv://alkebulan:bdXpldEFZA4DdhcY@crudapp.sgxry.mongodb.net/travel?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
