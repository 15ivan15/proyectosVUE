<template>
    <div>
        <td class="tabla">
            <table class="datos">
              <tr class="tr1">
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Precio</th>
                <th>Cantidad</th>
              </tr>
              <tbody>
                <tr class="tr2" v-for="dato in products" :key="dato">
                  <td>{{ dato.name }}</td>
                  <td>{{ dato.picture }}</td>
                  <td>{{ dato.price }}</td>
                  <td>{{ dato.stock }} </td>
                </tr>
              </tbody>
            </table>
          </td>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    name: 'Productlist',
    mounted(){
        this.fetchProducts();
    },
    methods:{
        ...mapActions('products',['fetchProducts'])
    },
}
</script>