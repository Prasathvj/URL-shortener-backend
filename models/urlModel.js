const mongoose = require('mongoose');

const urlShema = new mongoose.Schema({
    longUrl : {
        type : String,
        required:true
    },
    shortUrl:{
        type:String,
        unique:true
    },
    clickCount :{
        type:Number,
        default:0
    },
    userId :{
        type :String,
        required:true
    }

});

const url = mongoose.model('Url', urlShema)

module.exports = url;