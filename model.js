const mongoose=require('mongoose')
let newUserSchema=new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:String,
    email:String,
    insta_id:String,
    msg:String,
})
module.exports=mongoose.model('writer',newUserSchema)