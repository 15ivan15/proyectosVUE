<template>
  <div class="usuario">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-4">
          <br /><br />
          <img
            alt="Bootstrap Image Preview"
            src="../assets/profile.png"
            class="rounded-circle"
          />
          <dl>
            <br />
            <dt>Nombre completo:</dt>
            <dd>{{info.name}} {{info.lastname}}</dd>
            <dt>Usuario:</dt>
            <dd>
              {{info.usser}}
            </dd>
            <dt>Correo electrónico:</dt>
            <dd>{{info.email}}</dd>
          </dl>
          <br /><br />
          <b-button pill variant="danger">Eliminar cuenta</b-button>
        </div>
        <div class="col-md-7"></div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Usuario",
  data: function () {
    return {
      user_: {
        usser: "none",
      },
      info: "",
    };
  },
  created: function () {
    this.user_.usser = this.$route.params.usser;
    var self = this;
    axios
      .get("http://localhost:3000/api/usuarios/" + self.user_.usser, {
        headers: {},
      })
      .then((result) => {
        this.info = result.data.data;
        console.log(this.info);
      })
      .catch((error) => {
        if (error.response.status == 404)
          alert("No se ha podido crear al usuario");
      });
  },
};
</script>
