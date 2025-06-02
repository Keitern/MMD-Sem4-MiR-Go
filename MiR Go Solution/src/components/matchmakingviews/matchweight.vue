<script setup>
import { computed } from 'vue'

const props = defineProps({
  // receives products.json to extract weights from
  products: Array
})

const emit = defineEmits(['selectWeight']) // emits chosen weight to parent

// Computes unique weights from all product capacities
const uniqueWeights = computed(() => {
  const allWeights = props.products.flatMap(p => p.capacity)
  return [...new Set(allWeights)].sort((a, b) => a - b)
})

function selectWeight(weight) {
  emit('selectWeight', weight) // sends selected weight back to parent mirgo
}

// image backgrounds
const weightImages = {
  250: '/productimgs/0.webp',
  600: '/productimgs/0.webp',
  1350: '/productimgs/0.webp',
}
</script>

<template>
  <div class="match-step">
    <!-- Top progress lines -->
    <div class="line-row">
      <hr class="linefill" />
      <hr class="linefill" />
      <hr class="lineempty" />
    </div>

    <!-- Header title and description -->
    <div class="headertext">
      <h2>Select Max Capacity</h2>
      <h3>What is the maximum weight you need to handle?</h3>
    </div>

    <!-- Button group styled with background images -->
    <div class="weight-wrapper">
      <button
        v-for="weight in uniqueWeights"
        :key="weight"
        @click="selectWeight(weight)"
        :style="{
          backgroundImage: `url(${weightImages[weight] || ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <div>{{ weight }} kg</div>
      </button>

      <!-- Don't know option -->
      <button @click="selectWeight(null)">
        <div class="skipbtn">Skip >></div>
      </button>
    </div>
  </div>
</template>



<style scoped>
  .match-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
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
  color: white;
  text-align: center;
}

.weight-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 68%;
}

button {
  flex: calc(50% - 1rem); /* Two per row with spacing */
  border-radius: 0px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  height: 13vh;
  position: relative;
  z-index: 0;
  opacity: 85%;
  padding: 0;
  margin: 0;
  display: flex;
  width: 20vw;
  height: 10vw;
  background-color: rgb(0, 48, 135, 0.75);
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
  height: 3em;
  padding: 0 1vw;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 22px;
}

button > .skipbtn{
  all: unset;
  display: flex;
  width: 100%;
  height: 3em;
  align-self: center;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 22px;
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