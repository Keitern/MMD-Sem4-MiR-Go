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
  250: 'https://a.storyblok.com/f/230581/672x421/2ae31882e5/mir250-fallbackteaser.png/m/',
  600: 'https://a.storyblok.com/f/230581/672x421/347d9337e1/mir600-fallbackteaser.png/m/',
  1350: 'https://a.storyblok.com/f/230581/672x421/bdb745e5ae/mir1350-fallbackteaser.png/m/',
}
</script>

<template>
  <div class="match-step">
    <div class="weightText">
      <h2>Select Max Weight Capacity</h2>
    <p>How much weight do you need to move? </p>
</div>
    
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
    background: linear-gradient(90deg, #003087 33%, #000C21 100%);
  }

  .weight-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    max-width: 75%;
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
  .weightText{
    gap: 4px;
    text-align: center;
  }
  .weightText p{
   color: #fff;
   opacity: .8;

  }
  

  h2 {
    color: #fff;
  }
</style>