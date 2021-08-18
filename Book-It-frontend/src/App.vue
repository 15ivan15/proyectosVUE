<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>
          <img src="../src/assets/logo1.png" :to="{ name: 'inicio' }" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              v-if="!is_auth"
              style="font-size: 120%"
              v-on:click="Inicio()"
              >Inicio</b-nav-item
            >
            <b-nav-item
              v-if="is_auth"
              style="font-size: 120%"
              v-on:click="Usuario()"
              >Perfil</b-nav-item
            >
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <a style="font-size: 120%">Usuario</a>
              </template>
              <b-dropdown-item
                v-if="!is_auth"
                v-on:click="logIn()"
                :to="{ name: 'login' }"
                >Ingresar</b-dropdown-item
              >
              <b-dropdown-item v-if="!is_auth" :to="{ name: 'register' }"
                >Registrarse</b-dropdown-item
              >
              <b-dropdown-item v-if="is_auth" v-on:click="logOut()"
                >Cerrar Sesión</b-dropdown-item
              >
            </b-nav-item-dropdown>
            <b-nav-item style="font-size: 120%" :to="{ name: 'about' }"
              >About</b-nav-item
            >
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
    return {
      is_auth: false,
      usser: "",
    };
  },
  methods: {
    Inicio: function () {
      if (this.$route.name != "Inicio") {
        this.is_auth = false;
        this.$router.push({ name: "Inicio" });
      }
    },
    Usuario: function () {
      if (this.$route.name != "Usuario") {
        let usser = localStorage.getItem('user')
        this.$router.push({ name: "usuario", params:{usser} });
      }
    },
    beforeCreate: function () {
      this.$router.push({ name: "Inicio" });
    },
    logOut: function () {
      this.is_auth = false;
      localStorage.removeItem('user')
      if (!self.is_auth) {
        this.Inicio();
      }
    },
    logIn: function () {
      this.is_auth = true;
    },
  },
};
</script>