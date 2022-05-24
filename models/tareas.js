const { stripColors } = require("colors");
const Tarea = require("./tarea");


class Tareas {
    _listado = {};

    constructor(){
        this._listado = {};
    }

    get listadoArr(){
        const listado = [];

        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        })

        return listado;
    }

    borrarTarea(id=''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray( tareas = []){
        //this._listado[tarea.id] = tarea;
        this._listado = tareas;
    }

    crearTarea(desc=''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        this.listadoArr.forEach((tarea, i)=>{
            const ind = i+1;
            const completed = (tarea.completado)? true:false;
            //listado.push( tarea );
            console.log(`${ind}. ${tarea.desc} :: ${completed? 'Completada'.green:'Pendiente'.red} `);

        })       
    }

    listarPendientesCompletadas(completadas = true){
        this.listadoArr.filter((tarea)=> (tarea.completado !=null) == completadas ).forEach((tarea, i)=>{
            const ind = i+1;
            const completed = (tarea.completado)? true:false;
            //listado.push( tarea );
            console.log(`${ind}. ${tarea.desc} :: ${completed? 'Completada'.green:'Pendiente'.red} `);
        })
    }

    toggleCompletadas(ids = []){
        ids.forEach(id => {
            console.log("listadoArr: ", this._listado);
            const tarea = this._listado[id];
            console.log(tarea);
            if( !tarea.completado ){
                tarea.completado = new Date().toISOString();
            }
        });

        this.listadoArr.forEach( tarea => {

            if( !ids.includes(tarea.id) ){
                this._listado[tarea.id].completado = null;
            }

        })
    }
}

module.exports= Tareas;