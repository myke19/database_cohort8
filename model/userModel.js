const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    regNo : { type: String, required : [true, "Registration number is required"], unique: true},
    products : [{type: mongoose.Schema.Types.ObjectId, ref: "product"}]
});

const userModel = mongoose.model('User' , userSchema);

module.exports = userModel;