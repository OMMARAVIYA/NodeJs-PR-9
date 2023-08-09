const mongoose = require('mongoose')

const crudschema = mongoose.Schema({
    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'category'
    },
    subcategory : {
        type : String,
        require : true
    },
    status :{
        type : String,
        require : true
    }
})

const crud = mongoose.model('subcategory',crudschema)

module.exports = crud