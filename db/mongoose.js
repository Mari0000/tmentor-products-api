const mongoose = require("mongoose");
const { Seeder } = require('mongo-seeding');
const path = require('path');
mongoose.connect("mongodb://localhost:27017/tmentor-products-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then((result) => {
  console.log("Connected to database.")
}).catch((error) => {
  console.log(error)
})

const config = {
  database: 'mongodb://localhost:27017/tmentor-products-api',
  dropDatabase: true,
};

console.log(path.resolve('./db/data/'));

const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(path.resolve('./db/data'));
seeder
  .import(collections)
  .then(() => {
    console.log("Imported seed data successfully.");
  })
  .catch(err => {
    console.log(error);
  });