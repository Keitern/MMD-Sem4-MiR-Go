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
    <h2>Select Max Weight Capacity</h2>
    <!-- buttons rendered for each weight option -->
      <div class="weight-wrapper">
        <button
          v-for="weight in uniqueWeights" :key="weight" @click="selectWeight(weight)"
          :style="{
          backgroundImage: `url(${weightImages[weight] || ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }" >
        
          {{ weight }} kg
        </button>

        <button @click="selectWeight(null)">
          Don't know
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
  }

  .weight-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    max-width: 100%;
  }

  button {
    height: 20vh;
    width: 25vw;
    padding: 1rem;
    font-size: 1rem;
    color:white;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 0px;
    cursor: pointer;
    text-align: center;
    position: relative;
    z-index: 0;
  }

  button::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay */
  z-index: -1;
}

button > * {
  position: relative;
  z-index: 1;

}

  button:hover {
    background-color: #e0e0e0;
  }

  h2 {
    color: #fff;
  }
</style>