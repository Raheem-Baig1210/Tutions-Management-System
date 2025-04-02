const mongoose = require("mongoose");

const schema = mongoose.Schema;

const center_schema = new schema(
    {
        centerName: {type: String, required: true},
        location: {type:String, required:true},
    },
    {timestamps: true}
)

module.exports = mongoose.model("center",center_schema);