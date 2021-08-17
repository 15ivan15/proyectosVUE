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
                      <label for="email" style="font-size:150%">  Email address </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="user.email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="password" style="font-size:150%"> Password </label>
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
  name: "Login",
  data: function (){
    return {
      user:{
        email: "",
        pass: ""
      },
    };
  },
};
</script>

