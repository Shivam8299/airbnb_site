const mongoose = require("mongoose")
const express = require("express")
const app = express()
const initData = require("./data.js")
const Listing = require("../models/listing.js")

const MONGO_URL= "mongodb://localhost:27017/wonderlust"

async function main() {
    await mongoose.connect(MONGO_URL)
}
main().then(()=>{
    console.log("connected to DB")
})
.catch((err)=>{
    console.log(err)
})
const initDb = async ()=>{
    await Listing.deleteMany({})
   const result =  await Listing.insertMany(initData.data)
       console.log(result)
}
initDb()
app.get("/test/listing", async (req,res)=>{
    await Listing.deleteMany({})
    await Listing.insertMany(initData.data)
    console.log("data was inislise")
})
