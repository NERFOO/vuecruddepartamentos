<template>
    <div>
        <h1>Departamentos</h1>

        <div v-if="status == false"><img src="./../assets/images/loading.gif" /></div>

        <div v-else v-for="dept in departamentos" :key="dept">
            {{dept}}
            <router-link :to="`/detalles/${dept.numero}/${dept.nombre}/${dept.localidad}/`" class="btn btn-success">Detalles</router-link>
            <router-link :to="`/modificar/${dept.numero}/`" class="btn btn-info">Modificar</router-link>
            <router-link :to="`/eliminar/${dept.numero}/`" class="btn btn-danger">Eliminar</router-link>
            <br /><br />
        </div>
    </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos';
const service = new ServiceDepartamentos();

export default {
    name : "DepartamentosComponent" ,
    data() {
        return{
            departamentos : [],
            status : false
        }
    },
    methods : {

    },
    mounted() {
        service.getDepartamentos().then( result => {
            this.departamentos = result;
            this.status = true;
        })
    }
}
</script>

<style>

</style>