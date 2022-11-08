import { createRouter, createWebHistory } from "vue-router";
import DepartamentosComponent from './components/DepartamentosComponent.vue';
import InsertDepartamento from './components/InsertDepartamento.vue';
import DetalleDepartamento from './components/DetalleDepartamento.vue';
import UpdateDepartamento from './components/UpdateDepartamento.vue';
import DeleteDepartamento from './components/DeleteDepartamento.vue';

const routes = [
    {
        path : "/", component : DepartamentosComponent
    },
    {
        path : "/modificar", component : InsertDepartamento
    },
    {
        path : "/detalles/:num/:nom/:loc", component : DetalleDepartamento
    },
    {
        path : "/modificar/:id", component : UpdateDepartamento
    },
    {
        path : "/eliminar/:id", component : DeleteDepartamento
    }
]

const router = createRouter({
    history : createWebHistory() ,
    routes : routes
})

export default router;