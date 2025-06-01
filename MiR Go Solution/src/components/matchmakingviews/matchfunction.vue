<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  // gets filtered products after industry and weight filtering
  products: Array
})

const emit = defineEmits(['selectFunction']) // emits function to parent


const selectedFunction = ref(null) // stores selected topmodule


// finds all functions from product list, that fits weight + industry, adds "I don’t know" as fallback
const availableFunctions = computed(() => {
  const uniqueFunctions = Array.from(new Set(props.products.map(p => p.function)))
  return [...uniqueFunctions, 'I don’t know']
})


function select(func) {
  selectedFunction.value = func // updates internal selected function
}


  // emits null if "I don’t know" is selected
function goToResults() {
  emit('selectFunction', selectedFunction.value === 'I don’t know' ? null : selectedFunction.value)
}


// image backgrounds
const functionImages = {
  "Disinfection": '/productimgs/0.webp',
  "Shelves": '/productimgs/0.webp',
  "Anchoring Devices": '/productimgs/0.webp',

  "Lifts": '/productimgs/0.webp',
  "Conveyors": '/productimgs/0.webp',
  "Robot Arms": '/productimgs/0.webp',

  "Stations": '/productimgs/0.webp',
  "Communication": '/productimgs/0.webp',
  "I don't know": '/productimgs/0.webp',
}

</script>

<template>
  <div class="match-step">
    <h2>Select a Function</h2>

    <!-- creates card for each function -->
    <div class="function-wrapper">
      <div class="function-card" 
        v-for="func in availableFunctions" :key="func":class="{ selected: selectedFunction === func }" @click="select(func)"
          :style="{
          backgroundImage: `url(${functionImages[func] || ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }" >
        <p>{{ func }}</p>
      </div>
    </div>

    <!-- button disable until selected function -->
    <button @click="goToResults" :disabled="!selectedFunction">
      See Results
    </button>
  </div>
</template>

<style scoped>
.match-step {
  text-align: center;
}

.function-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.function-card {
  flex: 0 1 calc(33.333% - 1rem); /* 3 cards per row */
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 0px;
  border-color: #005cbf;
  cursor: pointer;
  transition: border-color 0.3s ease, background-color 0.2s;
  text-align: center;
  position: relative;
  z-index: 0;
}

.function-card p{
  font-size:1rem;
  font-weight: 600;
  color: white;
}

.function-card:hover {
  border-color: #ffffff;
}

.function-card.selected {
  border-color: #007bff;
  background-color: #ffffff2f;
}

.function-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay */
  z-index: -1;
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
  background-color: #007bff;
  cursor: not-allowed;
}
h2{
  color: #fff;
}
</style>