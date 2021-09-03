import { MongoClient } from "mongodb";

const url = "mongodb+srv://CarlMaxeyAdmin:CarlMaxeyCenter@carlmaxeydb.m3vfj.mongodb.net/CarlMaxeyDB?retryWrites=true&w=majority";

  
export const connectDatabase = () => {
    const client = MongoClient.connect(url);
};