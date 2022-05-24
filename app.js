const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, confirmar, leerInput, listadoTareasBorrar, mostrarListadoChecklist } = require('./helpers/inquirer');
const { mostrarMenu } = require('./helpers/mensajes');

const Tareas = require('./models/tareas');

require('colors');


const main = async() =>{

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
        //establecer las tareas
        // TODO: cargarTareas
        tareas.cargarTareasFromArray(tareasDB);
    }
    // await pausa();

    do{
        //imprime el menú
        opt = await inquirerMenu();


        switch(opt){
            case 1:
                //crear opcion
                const desc = await leerInput("Descripción: ");
                tareas.crearTarea(desc);
                // console.log(`${desc}`.red);
                break;
            case 2:
                //mostrar tareas
                tareas.listadoCompleto();
                // console.log(tareas.listadoArr);
                break;
            case 3:
                tareas.listarPendientesCompletadas(true); 
                break;
            case 4:
                tareas.listarPendientesCompletadas(false); 
                break;
            case 5://completar
                const ids = await mostrarListadoChecklist( tareas.listadoArr );
                console.log({ids});
                tareas.toggleCompletadas(ids);
                break;
            case 6: 
                const id = await listadoTareasBorrar(tareas.listadoArr);
                console.log(id);
                if(id !== '0'){
                    const ok = await confirmar('¿Estas seguro?');
                    console.log({ok});
                    // await pausa();
                    if( ok ){
                        tareas.borrarTarea( id );
                        console.log("Tarea borrada");
                    }
                }
                //preguntar si esta seguro

                break;
        }

        await pausa();

        guardarDB(tareas._listado);


    }while(opt != 0);

    // mostrarMenu();

    //pausa();
}

main();