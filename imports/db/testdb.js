import { MongoClient } from "mongodb";
  
export const connectDatabase = () => {
    const client = MongoClient.connect(url);
};
