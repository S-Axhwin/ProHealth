const mongoose = require("mongoose");

//username, password, number, email

const PatientSchema = {
    username:{
        type: String,
        required: true,
        unique: true
    },
    gender:{
        type: String,
    },
    password:{
        type: String,
        required: true
    },

    number:{
        type: Number,
        required: true,
        
    },
    email:{
        type: String,
        require: true,
        unique: true
    }
}

const Patient = mongoose.model("patient", PatientSchema);

module.exports = Patient

//username, gender, password, number, email

