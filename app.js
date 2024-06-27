const express = require("express");
const mongoose = require("mongoose")
const Listing = require("./models/listing");
const methodOverRide = require("method-override");
const ejsMate = require("ejs-mate");
const serverStatic = require("serve-static")
const path = require("path")
const MONGO_URL= "mongodb://localhost:27017/wonderlust"
const app = express();

async function main() {
   await mongoose.connect(MONGO_URL)
}
main().then(()=>{
    console.log("connected to DB")
})
.catch((err)=>{
    console.log(err)
})

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views","listing"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverRide("_method"))
app.engine("ejs",ejsMate)
app.use(serverStatic(path.join(__dirname,"/public/css")));

//++++++++++++++==Home route ++++++++++++++++++
app.get("/", (req,res)=>{
    res.send("i am home root")
})

// ++++++++++Index route +++++++++++

app.get("/listings",async (req,res)=>{
    const alllistings = await Listing.find({})
    res.render("index.ejs",{alllistings})
})

// +++++++++++New route ++++++++++++

app.get("/listings/new", (req, res)=>{
    res.render("new.ejs")
})

//++++++++++show route +++++++++

app.get("/listings/:id", async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    res.render("show.ejs",{listing})
})

//++++++++++++Create route +++++++++++

app.post("/listings", async (req, res)=>{
    let newListing = await  Listing (req.body.listing);
    await newListing.save();
    res.redirect("listings")
    console.log(newListing)
})

// +++++++++++ Edit route ++++++++++++++++
app.get("/listings/:id/edit", async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    res.render("edit.ejs",{listing})
})

//+++++++++++++Update Route +++++++++++++++++

app.put("/listings/:id", async (req, res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing})
    res.redirect(`/listings/${id}`)
})

//+++++++++++ Delete Route ++++++++++++++++++++

app.delete("/listings/:id", async(req,res)=>{
    let {id} = req.params;
    let deletedListings = await Listing.findByIdAndDelete(id)
    console.log(deletedListings)
    res.redirect("/listings")
})

// app.get("/test/listing", async (req,res)=>{
//     let sampleListing = new Listing ({
//         tittle : "my new villa",
//         discription : "by the beach",
//         location : "goa",
//         country : "India",
//         price : 12000
//     })
//     const result = await sampleListing.save();
//     console.log(result)
//     res.send(result)
// })

app.listen(8080, (err)=>{
    console.log("Server is listning on port no. 8080")
})
