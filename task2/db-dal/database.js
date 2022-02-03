import { config } from "dotenv";
// import { MongoClient } from "mongodb";

config();
console.log(process.env.DB_URI);

class DatabaseLayer {
  _clusterUri = "";

  constructor() {}

  connectToCluster() {
    let mongoClient;

    try {
      mongoClient = new MongoClient(this._clusterUri);
      console.log("Connecting to MongoDB cluster...");
      await mongoClient.connect();
      console.log("Successfully connected to MongoDB!");
      return mongoClient;
    } catch (error) {
      console.error("Connection to MongoDB Atlas failed!", error);
      process.exit();
    }
  }
}

module.exports.database = new this.DatabaseLayer();
