import Vue from 'vue'
import Router from 'vue-router'
import List from '../views/List.vue' //Ruta de archivo donde se encuentra la vista de historial
import Ingresar from '../views/Ingresar.vue' //Ruta de archivo donde se encuentra la vista de historial
import Actualizar from '../views/Actualizar.vue' //Ruta de archivo donde se encuentra la vista de historial

Vue.use(Router);
//Exportamos las rutas  para que puedan ser leídas por el main.js de vuejs
export default new Router({

    routes:[
        {
            path:'/list',
            name:'/list',
            component:List
        },
        {
            path:'/ingresar',
            name:'/ingresar',
            component:Ingresar
        },
        {
            path:'/actualizar',
            name:'/actualizar',
            component:Actualizar
        }
    ]
})