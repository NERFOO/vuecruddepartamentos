<template>
    <div>
        <h1>Delete Departamento</h1>
    </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos';
const service = new ServiceDepartamentos();

export default {
    name : "DeleteDepartamento" ,
    data() {
        return{
            id : 0
        }
    },
    mounted() {
        var id = this.$route.params.id;

        service.DeleteDepartamento(id).then( () => {
            this.$router.push("/");
        })
    }
}
</script>

<style>

</style>