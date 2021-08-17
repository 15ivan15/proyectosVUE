<template>
  <div class="inicio">
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="5000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 3px 3px 1px #333; font-size:200%; vertical-align: middle  "
      >
        <!-- Text slides with image -->
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../assets/slide3.png"
              alt="image slot"
            />
          </template>
          <p style="font-size:400%;">Book-It</p>
          <p>Tu primera librería virtual al alcance de unos pocos pasos.</p>
        </b-carousel-slide>

        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="../assets/slide4.png"
              alt="image slot"
            />
          </template>
          <p style="font-size:330%;">Crea tu usuario</p>
          <p>Es muy sencillo, solo necesitas de tus datos personales y una contraseña segura, y así, podrás disfrutar de este maravilloso mundo de la lectura.</p>
        </b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide >
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="100vh"
              height="100vh"
              src="../assets/slide5.png"
              alt="image slot"
            />
          </template>
          <p style="font-size:330%;">Ingresa a tu perfil</p>
          <p>Una vez creada tu cuenta podrás disfrutar de gran variedad de libros, podrás buscarlos, guardarlos y crear anotaciones sobre ellos.</p>
        </b-carousel-slide>
      
      </b-carousel>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Inicio",
  components: {},
};
</script>
