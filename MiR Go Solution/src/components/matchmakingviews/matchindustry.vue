<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  // this component receives all products as props from products.json
  products: Array
})

const emit = defineEmits(['selectIndustry']) // declares event emitting chosen industry to parent

// makes a list of industries from products.json
const uniqueIndustries = computed(() => {
  const allIndustries = props.products.flatMap(p => p.industry)
  return [...new Set(allIndustries)] // removes duplicates
})

function selectIndustry(industry) {
  emit('selectIndustry', industry) // emits the industry to parent (mirgo.vue)
}

const sortedIndustries = computed(() => {
  const others = uniqueIndustries.value.filter(i => i.toLowerCase() === 'other')
  const rest = uniqueIndustries.value.filter(i => i.toLowerCase() !== 'other')
  return [...rest, ...others]
})


// image backgrounds
const industryImages = {
  Healthcare: '/productimgs/0.webp',
  Electronics: '/productimgs/0.webp',
  Automotive: '/productimgs/0.webp',
  "Home furniture and Consumer goods": '/productimgs/0.webp',
  "Agriculture, Machinery and Tools": '/productimgs/0.webp',
  "Energy, Power and Safety": '/productimgs/0.webp',
  "Industrial and Manafacturing Solutions": '/productimgs/0.webp',
  "Logistics and Third party logistics": '/productimgs/0.webp',
  Other: '/productimgs/0.webp',
}
</script>

<template>
  <div class="match-step">
    <h2>Select Industry</h2>
    <div class="industry-wrapper">
      <!-- renders buttons, 
       ensures "Other" appears last 
       takes image from json and sets it as background-->
      <button
        v-for="industry in sortedIndustries"
        :key="industry"
        @click="selectIndustry(industry)"
        :style="{
          backgroundImage: `url(${industryImages[industry] || ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
      <!-- takes from json the exact string to display -->
        {{ industry }}
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

.industry-wrapper{ 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 50vw;
}

button {
  flex: 0 0 calc(33.33% - 1rem); /* Three per row with spacing */
  box-sizing: border-box;
  padding: 0.75rem 1.5rem;
  border-radius: 0px;
  color: white;
  background-color: #eee;
  cursor: pointer;
  border: 1px solid #ccc;
  font-size: 1rem;
  text-align: center;
  height: 15vh;
  position: relative;
  z-index: 0;
}

button strong {
  color:white;
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

h2 {
  color: #fff;
}

p{
  color: #fff;
}
</style>