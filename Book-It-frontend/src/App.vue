<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>
          <img src="../src/assets/logo1.png" :to="{ name: 'inicio'}"/>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item style="font-size:120%;" :to="{ name: 'inicio'}">Inicio</b-nav-item>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <a style="font-size:120%;">Usuario</a>
              </template>
              <b-dropdown-item :to="{ name: 'login'}">Ingresar</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'register'}">Registrarse</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item style="font-size:120%;" :to="{ name: 'about'}">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    Inicio: function () {
      if (this.$route.name != "Inicio") {
        this.$router.push({ name: "Inicio" });
      }
    },
    beforeCreate: function () {
      this.$router.push({ name: "Inicio" });
    },
  },
};
</script>