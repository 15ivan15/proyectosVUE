Vue.component('metodos',{
    data(){
        return {
            nombre: "Camilo",
            apellido: "Morales"
        }
    },
    computed:{
        nombreCompleto(){
            return `${this.nombre} ${this.apellido}`
        }
    },
    methods:{
        saludar(){
            alert("Hola " + this.nombreCompleto)
        }
    },
    template: `
        <div>
            <h1>Ejemplo con métodos</h1>
            <button onclick="saludar()">Mas opciones</button>
        </div>
    `
})