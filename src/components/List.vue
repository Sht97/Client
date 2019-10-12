<!--Template para la vista de historial, consta de una tabla cuyas columnas son el nombre del estudiante, el curso y la -->
<!--fecha en que se matriculó, los datos son pedidos al servidor y guardados en un array llamado hist[], son recorridos con-->
<!--un v-for (linea 17 a 20) para que se agreguen a la tabla-->
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <table class="table table-striped text-center">
                    <thead class="thead-light">
                    <tr>
                        <th class="text-center">Empleado</th>
                        <th class="text-center">Motilese</th>
                        <th class="text-center">{{list[0].documento}}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="reg in list"> <!-- Recorremos nuestro array -->
                        <td v-text="reg.documento"></td> <!--En la primera columna mostramos el nombre-->
                        <td v-text="reg.nombreCompleto"></td> <!--En la segunda mostramos el apellido-->
                        <td v-text="reg.salario"></td> <!--En la segunda mostramos el apellido-->
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
            this.getData();
        },
        //Variable de este componente que se requiere para su fincionamiento
        data() {
            return{
            list:[]
        }
    }
    ,
    mounted() {
        
        fetch('https://springlab.herokuapp.com/findAllEmp').
        then(res => res.json().then((data) => {
            this.list = data}));
        },
    //Hay un único método que se encarga de hacer la petición al servidor y cargar la respuesta en la variable hist[]
    methods: {
        getData()
        {
           
        
        }
    }
    }
</script>