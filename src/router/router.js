import Vue from 'vue'
import Router from 'vue-router'
import Ingresar from '../views/Ingresar.vue'
import Actualizar from '../views/Actualizar.vue'
import Lista from "../views/Lista";

Vue.use(Router);
//Exportamos las rutas  para que puedan ser leídas por el main.js de vuejs
export default new Router({

    routes:[
        {
            path:'/',
            name:'/lista',
            component:Lista
        },
        {
            path:'/ingresar',
            name:'/ingresar',
            component:Ingresar
        },
        {
            path:'/actualizar/:Emp',
            name:'/actualizar',
            component:Actualizar
        }
    ]
})