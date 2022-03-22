import {pegaArquivo}  from './index.mjs';
//const pegaArquivo = require('./index')

//const pegaArquivo1 = pegaArquivo()

const caminho = process.argv


console.log(pegaArquivo(caminho[2]))
