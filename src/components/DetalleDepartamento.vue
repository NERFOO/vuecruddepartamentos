<template>
    <div>
        <h1>Detalle departamento</h1>

        <div>
            <h1>Numero: {{$route.params.num}}</h1>
            <h1>Nombre: {{$route.params.nom}}</h1>
            <h1>Localidad: {{$route.params.loc}}</h1>
        </div>

        <router-link class="btn btn-danger" to="/">Volver</router-link>
    </div>
</template>

<script>
export default {
    name : "DetalleDepartamento" ,

}
</script>

<style>

</style>