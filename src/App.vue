<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="gradient">

    <div class="image-overlay"></div>

  <RouterView />
  
  </div>
  
</template>

<style scoped>

.gradient {
  background: linear-gradient(90deg, #acb5bb 0%, #6ca8d8 100%);
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative; /* Agregamos posición relativa para contener elementos posicionados absolutamente */
}

.image-overlay {
  background-image: url('./assets//fondo2.jpg'); /* Ruta a tu imagen */
  background-size: cover; /* Ajusta el tamaño de la imagen para cubrir el contenedor */
  background-position: center; /* Centra la imagen horizontalmente y verticalmente */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3; /* Ajusta la opacidad según tu preferencia */
}

</style>
