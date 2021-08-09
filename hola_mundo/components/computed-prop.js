Vue.component('computed-prop', {
    data(){
        return{
            nombre: "Carlos",
            apellido: "Torregrosa"
        }
    },
    computed:{
        nombreCompleto(){
            return `${this.nombre} ${this.apellido}`
        }
    },
    template: `
        <div>
            <h1>Ejemplo propiedades computadas</h1>
            <h3>{{nombreCompleto}}</h3>
        </div>
    `
})