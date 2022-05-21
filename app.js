const { inquirerMenu } = require('./helpers/inquirer');
const { mostrarMenu, pausa } = require('./helpers/mensajes');

require('colors');


const main = async() =>{
    console.log('Hola Mundo');

    let opt = '';
    do{
        opt = await inquirerMenu();

    }while(opt != 0);

    // mostrarMenu();

    //pausa();
}

main();