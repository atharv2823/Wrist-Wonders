import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { getHealth } from "./controllers/getHealth.js";
import { postWatch, getWatch, getWatchId, putWatchId, deleteWatchId} from "./controllers/watch.js";
import { error } from "./controllers/error.js";
import mongoose from "mongoose";
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json());

const connection = async ()=>{
  const connect = await mongoose.connect(process.env.MONGODB_URL)

  if(connect){
    console.log("MongoBd connected succesfully ")
  }

  else{
    console.log("MongoBd connected unsuccessfull ")
  }
}
connection()

app.get("/health", getHealth);

app.post("/watch", postWatch);

app.get("/watch", getWatch);

app.get("/watch/:id", getWatchId);

app.put("/watch/:id", putWatchId);

app.delete("/watch/:id", deleteWatchId);

app.use("*", error)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running at Port : ${PORT}`);
});
