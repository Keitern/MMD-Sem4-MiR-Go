<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  products: Array
})

const emit = defineEmits(['selectFunction'])

const selectedFunction = ref(null)

const availableFunctions = computed(() => {
  const functions = new Set(props.products.map(p => p.function))
  return ['I don’t know', ...Array.from(functions)]
})

function select(func) {
  selectedFunction.value = func
}

function goToResults() {
  emit('selectFunction', selectedFunction.value === 'I don’t know' ? null : selectedFunction.value)
}
</script>

<template>
  <div class="match-step">
    <h2>Select a Function</h2>

    <div class="function-grid">
      <div
        v-for="func in availableFunctions"
        :key="func"
        class="function-card"
        :class="{ selected: selectedFunction === func }"
        @click="select(func)"
      >
        <p>{{ func }}</p>
      </div>
    </div>

    <button @click="goToResults" :disabled="!selectedFunction">
      See Results
    </button>
  </div>
</template>

<style scoped>
.match-step {
  text-align: center;
}

.function-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}

.function-card {
  width: 160px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #f4f4f4;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.3s ease, background-color 0.2s;
  text-align: center;
  font-size: 0.95rem;
}

.function-card:hover {
  border-color: #007bff;
}

.function-card.selected {
  border-color: #007bff;
  background-color: #e9f3ff;
}

button {
  padding: 0.5rem 1.25rem;
  border: none;
  background-color: #005cbf;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:disabled {
  background-color: #999;
  cursor: not-allowed;
}
</style>