<template>
  <div class="delete">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4"></div>
        <br /><br /><br /><br /><br /><br /><br />
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
      </div>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-12">
              <h1 class="text-primary text-center">
                Eliminar cuenta
                <br /><br />
              </h1>
              <form role="form">
                <div class="form-group">
                  <label for="usser" style="font-size: 150%"> Usuario </label>
                  <input
                    type="text"
                    class="form-control"
                    id="usser"
                    v-model="user_.usser"
                  />
                </div>
                <div class="form-group">
                  <label for="password" style="font-size: 150%">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="user_.password"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  v-on:click="elimina"
                  variant="danger"
                  @click="seguir()"
                >
                  Confirmar
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Delete",
  data: function () {
    return {
      user_: {
        usser: "",
        password: "",
      },
      info: "",
    };
  },
  computed: {
    ...mapState(["is_auth"]),
  },
  methods: {
    ...mapMutations(["seguir", "salir"]),
   /*  Inicio: function () {
      if (this.$route.name != "Inicio") {
        this.is_auth = false;
        localStorage.removeItem("token");
        this.$router.push({ name: "Inicio" });
      }
    }, */
    elimina: function () {
      var self = this;
      let token = localStorage.getItem("token");
      axios
        .delete(
          "http://localhost:3000/api/usuarios/" +
            self.user_.usser +
            "/" +
            self.user_.password,
          {
            headers: { token },
          }
        )
        .then((result) => {
          this.info = result.data.message;
          localStorage.removeItem("token");
          localStorage.removeItem("isAuth");
          
          this.$router.push({ name: "inicio" });
          alert(this.info);
        })
        .catch((error) => {
          if (error.response.status == 404)
            alert("No se ha podido crear al usuario");
        });
    },
  },
};
</script>