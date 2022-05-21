const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que quieres hacer?',
        choices: [
            {
                value: 1,
                name: '1. Crear tarea'
            },
            {
                value: 2,
                name: '2. Listar tarea'
            },
            {
                value: 3,
                name: '3. Listar tareas completadas'
            },
            {
                value: 4,
                name: '4. Listar tarea(s) pendiente'
            },
            {
                value: 5,
                name: '5. Completar tarea(s)'
            },
            {
                value: 6,
                name: '6. Borrar tarea'
            },
            {
                value: 0,
                name: '0. Cerrar'
            },
        ]
    }
]

const inquirerMenu = async () => {

    console.clear();
    console.log('==========================='.rainbow);
    console.log('   Seleccione una opción   '.red);
    console.log('===========================\n'.rainbow);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;

}

module.exports = {
    inquirerMenu
}