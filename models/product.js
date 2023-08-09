const mongoose = require('mongoose')

const crudschema = mongoose.Schema({
    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'category'
    },
    subcategoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'subcategory'
    },
    pdcname : {
        type : String,
        require : true
    },
    price : {
        type : Number,
        require : true
    },
    qty : {
        type : Number,
        require : true
    },
    description : {
        type : String,
        require : true
    },
    image : {
        type : String,
        require : true
    },
})

const crud = mongoose.model('product',crudschema)

module.exports = crud