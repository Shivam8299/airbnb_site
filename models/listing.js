const mongoose = require("mongoose")
const schema = mongoose.Schema;
const listingSchema = new schema ({
    title : {
        type: String,
        required: true
    },
    discription:String,
    image: {
        type : String,
        default: "https://a0.muscache.com/im/pictures/miso/Hosting-36774428/original/15110762-267f-4a08-88ae-2d9d3603284d.jpeg?im_w=1200",
        set : (v)=> v===""? "https://a0.muscache.com/im/pictures/miso/Hosting-36774428/original/15110762-267f-4a08-88ae-2d9d3603284d.jpeg?im_w=1200" : v
    },
    location:String,
    country:String,
    price : Number
})

const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;
