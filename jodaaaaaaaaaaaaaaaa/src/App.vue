<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <b-container>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
      </b-container>
    </b-navbar>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  }
}
</script>