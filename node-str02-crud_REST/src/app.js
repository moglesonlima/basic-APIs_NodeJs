const express = require('express');

//Possibilita definir diversos fatores acerca de como será a req.
const bodyParser = require('body-parser');


const router = express.Router();
const app = express();

// convert .json!
app.use(bodyParser.json())
// codificar as urls
app.use(bodyParser.urlencoded({extended: false}))


const apiInf = router.get('/', (req, res, next)=>{
    res.status(200).send({
        title: 'Node Store API',
        version:'0.0.1'
    });
});

const create = router.post('/', (req, res, next)=>{
    res.status(201).send(req.body);
});

const update = router.put('/:id', (req, res, next)=>{
    //Pegando parametro da req
    const id = req.params.id;
    res.status(201).send({
        id: id, 
        item: req.body
    });
});

const del = router.delete('/', (req, res, next)=>{
    res.status(200).send(req.body);
});

app.use('/products', apiInf);
app.use('/products', create);
app.use('/products', update);
app.use('/products', del);


module.exports = app;