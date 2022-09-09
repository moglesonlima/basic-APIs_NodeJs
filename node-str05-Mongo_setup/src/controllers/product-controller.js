'use strict'
const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.get = (req, res, next) => {
    res.status(200).send([ ])
  }

exports.post = (req, res, next)=>{
    var product = new Product(req.body)
    
    product.save().then(x => {
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    }).catch(err => {
        res.status(400).send({
            message: 'Falha ao cadastrar produto', data: err
        });
    })
}

exports.put = (req, res, next)=>{
    //Pegando parametro da req
    const id = req.params.id;
    res.status(201).send({
        id: id, 
        item: req.body
    });
}

exports.delete = (req, res, next)=>{
    res.status(200).send(req.body);
};