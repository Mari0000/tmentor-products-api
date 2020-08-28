const { Query } = require("mongoose");
const Product = require("../models/product");

module.exports = {
    search: async (req, res) => {
      try {
          let query = req.query;
          // handle product name
          if(query.name){
            query["name"] = { "$regex": query.name, "$options": "i" }
          }
          // handling price search 
          if(query.lowerPrice && query.upperPrice){
            query["price"] = {$gte:query.lowerPrice , $lte:query.upperPrice}
            delete query["upperPrice"];
            delete query["lowerPrice"];
          }
          // handle product category
          if(query.category){
            query["category.id"] = query.category
            delete query["category"]
          } 
        const products = await Product.find(query);
        res.send(products)
      } catch (error) {
        res.status(500).send();
      }
    }
  }