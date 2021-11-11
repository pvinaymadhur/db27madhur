const mongoose = require("mongoose")
const rollsroyceSchema = mongoose.Schema({
rollsroyce_type: String,
model: String,
cost: Number
})
module.exports = mongoose.model("Costume",
rollsroyceSchema)