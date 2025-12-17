<template>
  <div id="app">
    <div class="container">
      <h1>Convertidor de Distancia</h1>

      <DistanceConverter />

      <p>Respuestas: 1:c,f   2:b   3:c   4:a   5:b</p>
    </div>
  </div>
</template>

<script setup>
import DistanceConverter from './components/DistanceConverter.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 20px;
}

.container {
  width: 420px;
  margin: 0 auto;
}

h1 {
  text-align: left;
  margin-bottom: 20px;
}
</style>
