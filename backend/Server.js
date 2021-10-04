require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const path=require('path')
connectDB();

const app = express();

//app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));
// app.use(express.static(path.join(__dirname,'build')))
app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));