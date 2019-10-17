<template>
    <div class="container">
        <h1 class="text-center">Actualización datos</h1>
        <form @submit="actualizar">
            <div class="form-row">
                <div class="col-md-4 mb-3">
                    <div class="form-group">
                        <label for="inputCedula">Cédula de la persona</label>
                        <input
                                type="text"
                                v-model="empleado.documento"
                                class="form-control"
                                id="inputCedula"
                                placeholder="Ingrese la cédula del nuevo trabajador"
                        />
                    </div>
                    <div class="form-group">
                        <label for="inputNombre">Nombre completo</label>
                        <input
                                type="text"
                                v-model="empleado.nombreCompleto"
                                class="form-control"
                                id="inputNombre"
                                placeholder="Ingrese el nombre completo"
                        />
                    </div>
                    <div class="form-group">
                        <label for="inputGenero">Genero de la persona</label>
                        <select id="inputGenero" class="form-control" v-model="empleado.genero">
                            <option selected>Choose...</option>
                            <option>Masculino</option>
                            <option>Femenino</option>
                            <option>Trans-genero</option>
                            <option>No identificado</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="form-group">
                        <label for="inputEstadoCivil">Estado civil</label>
                        <select id="inputEstadoCivil" class="form-control" v-model="empleado.estadoCivil">
                            <option selected>Choose...</option>
                            <option>Casad@</option>
                            <option>Solter@</option>
                            <option>Viud@</option>
                            <option>Unión libre</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="inputEdad">Edad</label>
                        <input
                                type="number"
                                v-model="empleado.edad"
                                class="form-control"
                                id="inputEdad"
                                placeholder="Edad de la persona"
                        />
                    </div>
                    <div class="form-group">
                        <label for="inputEmail">Email</label>
                        <input
                                type="email"
                                v-model="empleado.email"
                                class="form-control"
                                id="inputEmail"
                                placeholder="email"
                        />
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="form-group">
                        <label for="inputTelefono">Número telefónico</label>
                        <input
                                type="tel"
                                v-model="empleado.telefono"
                                class="form-control"
                                id="inputTelefono"
                                placeholder="Telefono"
                        />
                    </div>
                    <div class="form-group">
                        <label for="inputCargo">Cargo a asignar</label>
                        <select id="inputCargo" class="form-control" v-model="empleado.cargo">
                            <option selected>Choose...</option>
                            <option>Secretaria</option>
                            <option>Administrador</option>
                            <option>Oficios generales</option>
                            <option>Gerente</option>
                            <option>Ocultista</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="inputSalario">Salario</label>
                        <input
                                type="number"
                                v-model="empleado.salario"
                                class="form-control"
                                id="inputSalario"
                                placeholder="Salario a designar"
                        />
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Inscribir</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Actualizar",
        data(){
            return{
                empleado:{
                    documento:null,
                    nombreCompleto:null,
                    email:null,
                    cargo:null,
                    salario:null,
                    genero:null,
                    estadoCivil:null,
                    edad:null,
                    telefono:null,
                    id:null
                },
                list:[]
            }
        },
        mounted(){
            this.cargar();
        },
        methods:{
            actualizar(){
                this.empleado.id=this.empleado.documento;
                this.empleado.edad=parseInt(this.empleado.edad);
                this.empleado.salario=parseFloat(this.empleado.salario);

                fetch('https://springlab.herokuapp.com/update',{
                    method:'PUT',
                    body:JSON.stringify(this.empleado),
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    }
                }).then(res=>console.log(res))
            },
            cargar(){
                fetch('https://springlab.herokuapp.com/findEmp/'+this.$route.params.Emp).
                then(res => res.json().then((data) => {
                    this.empleado = data}));
            }
        }
    };
</script>

<style >

</style>