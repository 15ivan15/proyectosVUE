<template>
  <div class="login">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-4"></div>
              <br><br><br><br><br><br><br>
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
          </div>
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <div class="row">
                <div class="col-md-12">
                  <h1 class="text-primary text-center">
                    Inicio de Sesión
                    <br><br>
                  </h1>
                  <form role="form">
                    <div class="form-group">
                      <label for="usser" style="font-size:150%">  Usuario </label>
                      <input
                        type="text"
                        class="form-control"
                        id="usser"
                        v-model="user.usser"
                      />
                    </div>
                    <div class="form-group">
                      <label for="password" style="font-size:150%"> Contraseña </label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        v-model="user.pass"
                      />
                    </div>
                    
                    <button type="submit" class="btn btn-primary">
                      Iniciar
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-4"></div>
          </div>
          <div class="row">
            <div class="col-md-12"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function (){
    return {
      user:{
        usser: "",
        pass: ""
      },
    };
  },
};
</script>

