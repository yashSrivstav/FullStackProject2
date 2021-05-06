const mongoose = require('mongoose')
let newAdminSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    email: String,
    pass: String,
})
module.exports = mongoose.model('admins', newAdminSchema)