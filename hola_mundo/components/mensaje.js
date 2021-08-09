Vue.component('mensaje', {
    data(){
        return{
            mensaje: "hola guapo"
        }
    },
    template: `
        <div>
            <h1>{{mensaje}}</h1>
        </div>
    `
})