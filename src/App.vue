<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="gradient">
    
  <RouterView />
  </div>
  
</template>

<style scoped>

.gradient{
  background: linear-gradient(90deg, #9ebd13 0%, #008552 100%);
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

</style>
