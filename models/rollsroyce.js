const mongoose = require("mongoose")
const rollsroyceSchema = mongoose.Schema({
rollsroyce_type: String,
model: {type:String, required:true},
cost: { type: Number, min: 2000, max: 300000, default: 0 },
})
module.exports = mongoose.model("rollsroyce",
rollsroyceSchema)