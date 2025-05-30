<script setup>
import { computed } from 'vue'

const props = defineProps({
  products: Array
})
const emit = defineEmits(['selectWeight'])

const uniqueWeights = computed(() => {
  const allWeights = props.products.flatMap(p => p.capacity)
  return [...new Set(allWeights)].sort((a, b) => a - b)
})

function selectWeight(weight) {
  emit('selectWeight', weight)
}
</script>


<template>
  <div class="match-step">
    <h2>Select Weight Capacity</h2>
    <button
      v-for="weight in uniqueWeights"
      :key="weight"
      @click="selectWeight(weight)"
    >
      {{ weight }} kg
    </button>
  </div>
</template>



<style scoped>
  .match-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 6px;
    cursor: pointer;
  }

  button:hover {
    background-color: #e0e0e0;
  }
</style>