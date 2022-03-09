const roteador = require('express').Router()

roteador.use('/', (requisicao, resposta) => {
    respostas.send('Ok')

})

module.exports = roteador