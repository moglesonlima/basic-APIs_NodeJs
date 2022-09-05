'use strict';

const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send([
        ])
  });

router.post('/', (req, res, next)=>{
    res.status(201).send(req.body);
});

router.put('/:id', (req, res, next)=>{
    //Pegando parametro da req
    const id = req.params.id;
    res.status(201).send({
        id: id, 
        item: req.body
    });
});

router.delete('/', (req, res, next)=>{
    res.status(200).send(req.body);
});


module.exports = router;