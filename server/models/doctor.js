const mongoose = require("mongoose");

const DoctorSchema ={
    username:{
        type: String,
        required: true,
        unique: true
    },
    gender:{
        type: String,
    },
    experience:{
        type: Number,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    number:{
        type: Number,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
    
}

const Doctor = mongoose.model("docter",DocterSchema);
module.exports = Docter;