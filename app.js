const {crearArchivo} = require ('./helpers/multiplicar');
const argv = require('./config/yargs.js');
const color = require('colors');

console.clear();

 crearArchivo(argv.b, argv.l, argv.h)
        .then(nombreArchivo=> console.log(nombreArchivo, 'creado'.inverse))        
        .catch(err=>console.log(err));
