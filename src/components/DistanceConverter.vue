<template>
  <div class="converter">
    <div class="input-row">
      <label for="km">Kilómetros (km):</label>
      <input id="km" type="text" v-model="kmInput" />
    </div>

    <p v-if="meters !== null" :style="{ color: color }">Metros (m): {{ meters }}</p>
    <p v-if="miles !== null" :style="{ color: color }">Millas (mi): {{ miles }}</p>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useDistanceStore } from '../store/useDistanceStore'

const store = useDistanceStore()
const kmInput = ref(store.km)

watch(kmInput, (value) => store.setKm(value))

const meters = computed(() => store.meters)
const miles = computed(() => store.miles)
const color = computed(() => store.color)
</script>

<style scoped>
.converter { 
  width: 100%;
  max-width: 300px;
  display: flex; 
  flex-direction: column; 
  align-items: flex-start; 
}

.input-row {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.input-row label {
  width: 130px;
  white-space: nowrap;
}

.input-row input {
  flex: 1;
  padding: 6px;
  font-size: 16px;
}
</style>
