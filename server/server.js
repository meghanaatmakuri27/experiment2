const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const mongo_uri = "mongodb+srv://admin:admin@cluster0.kyiehv9.mongodb.net/";

mongoose.connect(mongo_uri);
const con = mongoose.connection;
con.on("open", () => {
  console.log("connected with mongodb");
});

app.use(cors());

const foodRoute = require("./Routes/FoodPage");
const CartRoute=require('./Routes/CartRoute');
app.use(express.json());
app.use("/food", foodRoute);
app.use("/cart",CartRoute);

app.listen(5000, () => {
  console.log("server started at 5000");
});
