const { Query } = require("mongoose");
const Product = require("../models/product");

module.exports = {
    search: async (req, res) => {
      try {
          let query = req.body;
          // handling price search 
          if(query.lowerPrice && query.upperPrice){
            query["price"] = {$gte:query.lowerPrice , $lte:query.upperPrice}
            delete query["upperPrice"];
            delete query["lowerPrice"];
            }    
        const products = await Product.find(query);
        res.send(products)
      } catch (error) {
        res.status(500).send();
      }
    }
  }