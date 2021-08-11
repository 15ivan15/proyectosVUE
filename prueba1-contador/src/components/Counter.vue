<template>
    <div>
        <h1 class="text-center">
            Esto es una prueba, espero que sirva men
        </h1>
        <button class="btn btn-success btn-block" @click="increment()"> Incrementa</button>
        <div class="alert alert-primary mt-3" role="alert">
            {{counter}}
        </div>
        <button class="btn btn-danger btn-block" @click="decrement()"> Decrementa</button>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'Counter',
  computed: {
      ...mapState(['counter'])
  },
  methods:{
      ...mapMutations(['increment','decrement'])
  }
}
</script>