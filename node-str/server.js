'use strict'

// console.log('Testando...')

// importação de modulos

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

const app = express();
const port = normalizePort(process.env.POR || 3000);

//Setando a porta
app.set('port', port);

// Criacao do servidor
const server = http.createServer(app);
const router = express.Router();

// Criando rotas

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

//Rota prefixo
app.use('/', route);

//ouvindo
server.listen(port);

//Tratamento de erros
server.on('error', onError);

//Usando debug
server.on('listening', onListemning);
console.log('API Rodando na porta: ' + port);


//Func Normalize port(gerador express)
function normalizePort(valor) {

    const port = parseInt(valor, 10);

    if (isNaN(port)) {
        return val;
    } if (port >= 0) {
        return port;
    }
    return false;
}

//Func ERROR
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = (
        typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port
    );
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevatede privileges');
            process.exit(1);
            break;
        case 'EADDRIUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }


}

//Usando Debug
function onListemning(){
     const addr = server.address();

     const bind = (
        typeof addr === 'string' ? 'pipe ' + addr : 'port '+ addr.port
        );
    
        debug('Listening on '+ bind);
}