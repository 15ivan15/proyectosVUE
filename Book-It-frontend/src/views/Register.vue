<template>
  <div class="register">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-4"></div>
            <br /><br /><br /><br />
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
          </div>
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <div class="row">
                <div class="col-md-12">
                  <h1 class="text-primary text-center">
                    Registrar Usuario
                    <br />
                  </h1>
                  <form role="form">
                    <div class="form-group">
                      <label for="name" style="font-size: 150%"> Nombre </label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        v-model="user_.name"
                        placeholder="Sergio"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="lastname" style="font-size: 150%">
                        Apellido
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="lastname"
                        v-model="user_.lastname"
                        placeholder="Montilla"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="user" style="font-size: 150%">
                        Usuario
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="user"
                        v-model="user_.usser"
                        placeholder="Montilla"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="email" style="font-size: 150%">
                        Email address
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="user_.email"
                        placeholder="SergioMontilla@gmail.com"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="password" style="font-size: 150%">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        v-model="user_.password"
                        placeholder="*************"
                        required
                      />
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      v-on:click="enviar"
                      @click="showDismissibleAlert = true"
                      variant="info"
                    >
                      Registrar
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-4"></div>
          </div>
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <br /><br />
              <b-alert
                variant="info"
                dismissible
                fade
                :show="showDismissibleAlert"
                @dismissed="showDismissibleAlert = false"
              >
                {{info}}
              </b-alert>
            </div>
            <div class="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data: function () {
    return {
      user_: {
        name: "",
        lastname: "",
        email: "",
        usser: "",
        password: "",
        books: [{}],
      },
      info: "",
      showDismissibleAlert: false,
    };
  },
  methods: {
    enviar: function () {
      var self = this;
      axios
        .post("http://localhost:8080/api/user/", self.user_, {
          headers: {},
        })
        .then((result) => {
          this.info = result.data.message;
        })
        .catch((error) => {
          if (error.response.status == 404)
            alert("No se ha podido crear al usuario");
        });
    },
  },
};
</script>