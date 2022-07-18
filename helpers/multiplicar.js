const fs = require('fs');//requiere el paquete de node file system
const color = require('colors');

const crearArchivo = async (base =5 , listar = false, hasta = 10)=>{

    try{
         
        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++){
            salida +=`${base} x ${i} = ${base*i}\n`;
            consola +=`${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        }
        if(listar){
            console.log('===================='.rainbow);
            console.log('    Tabla del: '.red, base);
            console.log('===================='.rainbow);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida.blue);//creamos el archivo.

        return `tabla-${base}.txt`;

}catch(err){
    throw err;
}    
        

};
//esta es la manera de exportar funciones en node
module.exports = {
    crearArchivo
}