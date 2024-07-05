const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://mrinalbhattacharya:qKWc2GPKuZMzlTNr@cluster0.yusbclf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Failed" , err);
  });


  // ProductSchema

  const productSchema = new mongoose.Schema({
    product_name : {
        type : String,
        required : true
    },
    product_price : {
        type : String,
        required : true
    },
    isInStock : {
        type : Boolean,
        required : true
    },
    category : {
     type : String,
     required : true

    }



  })




const app = express();

app.listen(8086, () => {
  console.log("Server sarted at port 8086");
});
