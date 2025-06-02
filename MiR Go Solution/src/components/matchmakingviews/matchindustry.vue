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
    <div class="line-row">
    <hr class="linefill" />
    <hr class="lineempty" />
    <hr class="lineempty" />
    </div>

    <div class="headertext">
    <h2>Select Industry</h2>
    <h3> This tells us what kind of environment we need to accommodate! </h3>
    </div>

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
        <div>{{ industry }}</div>
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

.match-step h3{
  color: #fff;
  font-weight: 300;
}

.industry-wrapper{ 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 68%;
}

button {
  flex: calc(33.33% - 1rem); /* Three per row with spacing */
  border-radius: 0px;
  border: 0;
  cursor: pointer;
  font-size: 1rem;
  height: 13vh;
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
    0 0 12px rgba(114, 199, 231, 0.8)
}

button > div{
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

  font-family: 'Open sans', sans-serif;
  font-weight: 400;
}

h2 {
  color: #fff;
}

.headertext{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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