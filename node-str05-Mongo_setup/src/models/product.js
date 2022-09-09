'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    //Antes de tudo _id -> criado de forma automática
    title: {
        type: String,
        required: true,
        //Remove spaces antes e depois da string
        trim: true 
    },
    slug: { //Cadeira Gamer = cadeira-gamer
        type:String,
        required:[ true, 'O slug é obrigatório!!!'],
        trim: true,
        index: true,
        unique: true
    },
    description:{
        type: String,
        required:true,
    },
    price:{
        type: Number,
        require: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags:[{
        type: String,
        required: true
    }]
})

module.exports = mongoose.model('Product', schema);