import Global from "./../Global";
import axios from "axios";

export default class ServiceDepartamentos{
    getDepartamentos() {
        return new Promise(function ( resolve ) {
            var request = "/api/departamentos/";
            var url = Global.urlDept + request;

            axios.get(url).then( res => {
                resolve(res.data);
            })
        })
    }

    //METODO QUE RECIBIRA UN OBJETO DEPARTAMENTO DESDE LA PETICION
    postDepartamento(departamento) {
        return new Promise(function ( resolve ) {
            var request = "/api/departamentos/";
            var url = Global.urlDept + request;

            axios.post(url, departamento).then( res => {
                resolve(res);
            })
        })
    }

    //METODO PARA BUSCAR UN DEPARTAMENTO EN EL API RECIBIMOS EL ID DEL DEPARTAMENTO
    findDepartamento(id) {
        return new Promise(function ( resolve ) {
            var request = "/api/departamentos/" + id;
            var url = Global.urlDept + request;

            axios.get(url).then( res => {
                resolve(res.data);
            })
        })
    }

    //METODO PARA MODIFICR UN DEPARTAMENTO, RECIBIMOS EL DATO DEL OBJETO DEPARTAMENTO
    updateDepartamento(departamento) {
        return new Promise(function ( resolve ) {
            var request = "/api/departamentos/";
            var url = Global.urlDept + request;

            axios.put(url, departamento).then( res => {
                resolve(res.data);
            })
        })
    }

    DeleteDepartamento(id) {
        return new Promise(function ( resolve ) {
            var request = "/api/departamentos/" + id;
            var url = Global.urlDept + request;

            axios.delete(url).then( res => {
                resolve(res.data);
            })
        })
    }

}