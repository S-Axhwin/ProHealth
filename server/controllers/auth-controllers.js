const patient = require('../models/patient');
const doctor = require("../models/doctor")
const Preg =  async(req, res)=>{
    //name, password, number, email
    console.log(req.body);
    const { username, gender, password, number, email } = req.body;
    const exits = await patient.find({username})
    console.log(exits);
    if(exits){
        console.log('no user exist');
        try{
            await patient.create({
                username,
                gender,
                password,
                number,
                email
            })
            res.send({status: true, reason: "user created"});
            return 0;
        }catch(err){
            console.log(err);
            res.json({status: false, reason: "user already exist"});
            return 0;
        }
        
    }
    res.send({status: false, reason: "user already exist"})
}

const Plogin = async (req, res)=>{
    const {  password, email } = req.body;
    const isExist = await patient.findOne({password, email});
    if(isExist){
        console.log(isExist);
        res.json({status: true, reason: "logged in"})
    }else{
        res.json({status: false, reason: 'user doesn exist'})
    }
}

const Dreg =  async(req, res)=>{
    //name, password, number, email
    console.log(req.body);
    const { username, gender,experience, password, number, email } = req.body;
    const exits = await docter.find({username})
    console.log(exits);
    if(exits){
        console.log('no docter exist');
        try{
            await doctor.create({
                username,
                gender,
                experience,
                password,
                number,
                email
            })
            res.send({status: true, reason: "docter created"});
            return 0;
        }catch(err){
            console.log(err);
            res.json({status: false, reason: "docter already exist"});
            return 0;
        }
        
    }
    res.send({status: false, reason: "docter already exist"})
}

module.exports = {
    Preg,
    Dreg,
    Plogin
}