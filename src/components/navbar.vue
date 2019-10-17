<!--Este es un componente simple que consta de una barra de navegación que estará presente en ambas vistas de la apliación-->
<!--y se encarga de redireccionar entre ellas-->
<template>
    <nav class="navbar navbar-light bg-light">
        <router-link to="/ingresar" class="navbar-brand" msg="daniel">Inscripción trabajadores</router-link>
        <router-link to="/" class="navbar-brand">Lista de trabajadores</router-link>
                     

    </nav>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>
