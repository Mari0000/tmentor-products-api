const express = require("express");
require("../db/mongoose");
const productRouter = require("../routers/product");
const app = express();
const port = process.env.PORT || 3000;
//const User = require("./models/user");


app.use(express.json());
app.use(productRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
