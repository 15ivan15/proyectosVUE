<template>
  <div class="register">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
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
                  <h1 class="text-primary text-center">Registrar Usuario
                    <br><br>
                  </h1>
                  <form role="form">
                    <div class="form-group">
                      <label for="name" style="font-size:150%"> Nombre </label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        v-model="user.name"
                        placeholder="Sergio"
                      />
                    </div>
                    <div class="form-group">
                      <label for="lastname" style="font-size:150%"> Apellido </label>
                      <input
                        type="text"
                        class="form-control"
                        id="lastname"
                        v-model="user.lastname"
                        placeholder="Montilla"
                      />
                    </div>
                    <div class="form-group">
                      <label for="email" style="font-size:150%"> Email address </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="user.email"
                        placeholder="SergioMontilla@gmail.com"
                      />
                    </div>
                    <div class="form-group">
                      <label for="password" style="font-size:150%"> Password </label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        v-model="user.pass"
                        placeholder="*************"
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">
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
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data: function () {
    return {
      user: {
        name: "",
        lastname: "",
        email: "",
        pass: "",
      },
    };
  },
};
</script>