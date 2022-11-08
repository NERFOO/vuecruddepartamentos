<template>
    <div>
        <h1>Crear Departamento</h1>

        <form method="POST" v-on:submit.prevent="insertarDepartamento()">
            <label>Numero</label>
            <input type="number" class="form-control" v-model="departamento.numero" />
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="departamento.nombre" />
            <label>Localidad</label>
            <input type="text" class="form-control" v-model="departamento.localidad" />
            <br />
            <button class="btn btn-info">Crear departamento</button>
        </form>
    </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos';
const service = new ServiceDepartamentos();

export default {
    name : "InsertDepartamento" ,
    data() {
        return{
            departamento : {
                numero : 0 ,
                nombre : "" ,
                localidad : ""
            }
        }
    },
    methods :{
        insertarDepartamento() {
            service.postDepartamento(this.departamento).then( () => {
                this.$router.push("/");
            })
        }
    }
}
</script>

<style>

</style>