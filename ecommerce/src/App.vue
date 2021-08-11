<template>
  <div id="app">
    <h1>sirvo</h1>
    <productlist></productlist>
  </div>
</template>

<script>
import Productlist from '@/components/Productlist'

export default {
  name: 'App',
  components: {
    Productlist
  }
}
</script>
