const argv = require('yargs')//configuramos yargs
                .option('b',{ // segunda opcion para definir la base -b
                    alias: 'base',
                    type:'number',//tipo de dato, boolean, string, numbre etc..
                    demandOption: true, //es obligatorio enviar la base.
                    describe:'Es la base de la tabla de multiplicar.'//esto muestra la descripcion al usuario en node app --help.
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default:false,
                    describe: 'Muestra la tabla en consola.'//esto muestra la descripcion al usuario en node app --help.
                    
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default:10,
                    describe: 'Numero hasta donde quieres la tabla'//esto muestra la descripcion al usuario en node app --help.
                    
                })
                .check((argv,options)=>{//hacemos un check de los argumentos enviados.
                    if(isNaN(argv.b)){//si el argumento enviado no es un numero.
                        throw 'La base tiene que ser un numero';
                    }
                    return true;//siempre debemos retornar true para que el check funcione.
                })
                .argv;


module.exports = argv;