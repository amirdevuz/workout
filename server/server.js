const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const productRouter = require('./routes/products');
const userRouter = require('./routes/users');

dotenv.config();

// app
const app = express();

// port & url
const port = process.env.PORT || 5000;
const url = process.env.MONGO_URL;

// middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// api
app.use("/products", productRouter);
app.use("/users", userRouter);

// start server
app.listen(port, () => console.log("Server, port: " + port));

// Database ga ulanish
mongoose.set('strictQuery', true);
mongoose.connect(url)
  .then(() => console.log("MongoDB"))
  .catch(err => console.log(err));
