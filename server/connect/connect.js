const mongoose = require('mongoose');


const connector = async()=>{
    try{
        await mongoose.connect("mongodb+srv://ashwinsathiya:NAJ4TtK5SwUGrJTX@first.n1as9m8.mongodb.net/Patient?retryWrites=true&w=majority&appName=first")
        console.log("connected to db")
    }catch(err){
        console.log(err);
    }
}

module.exports = connector;