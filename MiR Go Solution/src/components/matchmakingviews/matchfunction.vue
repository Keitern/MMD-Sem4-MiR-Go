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
  emit('selectFunction', func === 'I don’t know' ? null : func)
}



// image backgrounds
const functionImages = {
  "Disinfection": '/productimgs/0.webp',
  "Shelves": '/public/productimgs/1.webp',
  "Anchoring Devices": '/public/productimgs/13.webp',

  "Lifts": '/public/productimgs/23.webp',
  "Conveyors": '/public/productimgs/33.webp',
  "Robot Arms": '/public/productimgs/51.webp',

  "Stations": '/public/productimgs/56.webp',
  "Communication": '/public/productimgs/86.webp',
  "I don't know": '/productimgs/0.webp',
}

</script>

<template>
  <div class="match-step">
    <!-- Progress lines -->
    <div class="line-row">
      <hr class="linefill" />
      <hr class="linefill" />
      <hr class="linefill" />
    </div>

    <!-- Header text -->
    <div class="headertext">
      <h2>Select Module Function</h2>
      <h3>What kind of task do you need solved?</h3>
    </div>

    <!-- Function cards -->
    <div class="function-wrapper">
      <button
        v-for="func in availableFunctions"
        :key="func"
        @click="select(func)"
        :class="{ unknown: func === 'I don’t know ' }"
        :style="{
          backgroundImage: `url(${functionImages[func] || ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
        }" >
          <div style="display: flex; align-items: center;">
        <div>{{ func }}</div>
        <template v-if="func === 'I don’t know'">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="8,4 16,12 8,20" />
          </svg>
        </template>
      </div>
      </button>
    </div>
  </div>
</template>

<style scoped>
.match-step {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 1rem;
}

.match-step h2 {
  color: #fff;
}

.match-step h3 {
  color: #fff;
  font-weight: 300;
}

.headertext {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.function-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 68%;
}

button {
  flex: calc(33.33% - 1rem); /* 3 per row with spacing */
  height: 13vh;
  border-radius: 0px;
  border: 0;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  z-index: 0;
  opacity: 85%;
  padding: 0;
  margin: 0;
  display: flex;
}

button:hover {
  opacity: 100%;
  transition: 0.2s;
  box-shadow:
    0 0 12px rgba(12, 9, 49, 0.6),
    0 0 12px rgba(114, 199, 231, 0.8);
}

button > div {
  display: flex;
  width: 100%;
  height: 4em;
  padding: 0 1.5vw;
  align-self: flex-end;
  text-align: left;
  justify-content: left;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  opacity: 200%;
  z-index: -1;

  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}

button > div > div{
  color: white;
}

button.unknown {
  display: flex;
  width: 100%;
  height: 13vh;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: white;
}
button.unknown > div{
  display: flex;
  width: 100%;
  height: 13vh;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 48, 135, 0.75);
}

/* progress lines */
.line-row {
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 68%;
  margin-top: 1rem;
}

.linefill {
  flex: 5;
  border: none;
  height: 4px;
  background-color:#1A76BC;
  border-radius: 2px;
  max-width: 33%;
}
.lineempty {
  flex: 5;
  border: none;
  height: 4px;
  background-color: #CBEEFA;
  border-radius: 2px;
  max-width: 33%;
}
</style>