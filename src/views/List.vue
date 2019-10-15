<!--Template para la vista de historial, consta de una tabla cuyas columnas son el nombre del estudiante, el curso y la -->
<!--fecha en que se matriculó, los datos son pedidos al servidor y guardados en un array llamado hist[], son recorridos con-->
<!--un v-for (linea 17 a 20) para que se agreguen a la tabla-->
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-20">
                <table class="table table-striped text-center">
                    <thead class="thead-light">
                    <tr>
                        <th class="text-center">Documento de identidad</th>
                        <th class="text-center">Nombre completo</th>
                        <th class="text-center">Genero</th>
                        <th class="text-center">Estado Civil</th>
                        <th class="text-center">Salario</th>
                        <th class="text-center">Email</th>
                        <th class="text-center">Telefono</th>
                        <th class="text-center">Despedir</th>
                        <th class="text-center">Actualizar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(reg,index) in list" :key="index"> <!-- Recorremos nuestro array -->
                        <td v-text="reg.documento"></td> <!--En la primera columna mostramos el nombre-->
                        <td v-text="reg.nombreCompleto"></td> <!--En la segunda mostramos el apellido-->
                        <td v-text="reg.genero"></td>
                        <td v-text="reg.estadoCivil"></td> <!--En la segunda mostramos el apellido-->
                        <td v-text="reg.salario"></td>
                        <td v-text="reg.email"></td>
                        <td v-text="reg.telefono"></td>
                        <td >
                            <button class="btn btn-danger" @click="despedir(reg.documento)">Despedir</button>
                        </td>
                        <td>  <router-link to="/actualizar/'{{reg.documento}}'" class="btn btn-warning">Actualizar</router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "test",
        //Funciones que realiza al crearse o renderizarse la vista
        created() {
        },
        //Variable de este componente que se requiere para su fincionamiento
        data() {
            return{
            list:[]
        }
    }
    ,
    mounted() {
        this.cargar()
        },
    //Hay un único método que se encarga de hacer la petición al servidor y cargar la respuesta en la variable list[]
    methods: {
        despedir(index){
            fetch('https://springlab.herokuapp.com/delEmp/'+index,{
                method: 'DELETE'
            }).then(res=>{
                this.cargar();
            })
        },
        cargar(){
            fetch('https://springlab.herokuapp.com/findAllEmp').
            then(res => res.json().then((data) => {
                this.list = data}));
        },
        actualizar(cedula)
        {
            this.$route.router.go('/actualizar'+cedula)
        }
    }
    }
</script>
