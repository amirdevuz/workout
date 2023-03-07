const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?cs=srgb&dl=pexels-suzy-hazelwood-2536965.jpg&fm=jpg"
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  rating: {
    rate: {
      type: Number,
      default: 0,
    },
    counter: {
      type: Number,
      default: 0,
    }
  },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema)