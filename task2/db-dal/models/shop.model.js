const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({ name: "string", dummy: "string" });
const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;
