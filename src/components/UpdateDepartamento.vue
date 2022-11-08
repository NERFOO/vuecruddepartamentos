<template>
    <div>
        <h1>Update departamento</h1>

        <form method="POST" v-on:submit.prevent="actualizarDepartamento()" v-if="departamento">
            <input type="hidden" class="form-control" v-model="departamento.numero"/>
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="departamento.nombre"/>
            <label>Localidad</label>
            <input type="text" class="form-control" v-model="departamento.localidad"/>
            <br />
            <button class="btn btn-info">Modificar departamento</button>
        </form>

        <router-link class="btn btn-danger" to="/">Volver</router-link>
    </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos';
const service = new ServiceDepartamentos();

export default {
    name : "UpdateDepartamento" ,
    data() {
        return{
            departamento : null ,
            id : 0
        }
    },
    methods : {
        actualizarDepartamento() {
            service.updateDepartamento(this.departamento).then( () => {
                this.$router.push("/");
            })
        }
    },
    mounted(){
        this.id = this.$route.params.id;

        service.findDepartamento(this.id).then( result => {
            this.departamento = result;
        })
    }
}
</script>

<style>

</style>