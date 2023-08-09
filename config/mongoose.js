const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/Kaludon-API')

const db = mongoose.connection

db.on('connected',(err)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log("Db Connected");
})

module.exports = db