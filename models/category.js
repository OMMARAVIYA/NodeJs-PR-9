const mongoose = require('mongoose')

const crudschema = mongoose.Schema({
    category : {
        type : String,
        require : true
    },
    status :{
        type : String,
        require : true
    }
})

const crud = mongoose.model('category',crudschema)

module.exports = crud