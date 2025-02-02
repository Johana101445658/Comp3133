/**

 */
const mongoose = require("mongoose");
const restaurantSchema = new mongoose.Schema({               
  name: {                                                    
    type: String,
    required: [true, "Restaurant name is required."],
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  cuisine: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  restaurant_id: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  address: {
    building: { type: String, trim: true },
    street: { type: String, trim: true },
    zipcode: { type: String, trim: true }
  }
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
