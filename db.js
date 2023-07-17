const mongoose = require('mongoose');
require('dotenv').config();

//mongo Atlas url
const MongoURL =process.env.MongoURL

 const dbConnection =()=>{
    const params = {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }  
    try {
        mongoose.connect(MongoURL,params)
        console.log("Database connected successful")
    } catch (error) {
        console.log("Database connected failed")
    }
}

module.exports = {dbConnection}  