import { Schema, model } from "mongoose";

const watchSchema = new Schema({
    brand : String,
    price : String,
    color :String,
    image : String,
    gender : String,
    review : String,
    description : String
},
{
    timestamps:true
})

const Watch = model("Watch", watchSchema)

export default Watch