import { MongoClient } from "mongodb";

const user = "user_001";
const userPassword = "aPAgADy1URm2eV95";
const cluster = "cluster0.cuevw";

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("main");

  return {
    listings: db.collection("test_listings"),
  };
};
