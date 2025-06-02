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
  Healthcare: '/productimgs/industrierhealthcare.webp',
  Electronics: '/productimgs/industrierelektronic.webp',
  Automotive: '/productimgs/industrierautomotive.webp',
  "Home furniture and Consumer goods": '/productimgs/industrierconsumergood.webp',
  "Agriculture, Machinery and Tools": '/productimgs/industrieragraculture.webp',
  "Energy, Power and Safety": '/productimgs/industrierenergi.webp',
  "Industrial and Manafacturing Solutions": '/productimgs/industrierindustrier.webp',
  "Logistics and Third party logistics": '/productimgs/industrierlogistik.webp',
  Other: '/productimgs/0.webp',
}
</script>

<template>
  <div class="match-step">
    <div class="industryText">
    <h2>Select Industry</h2>
    <p>This tells us what kind of environment we need to accommodate</p>
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
.industryText{
display: flex;
text-align: center;
flex-direction: column;
}
.industryText p{
    opacity:.8;
}

button {
  flex: 0 0 calc(33.33% - 1rem); /* Three per row with spacing */
  box-sizing: border-box;
  padding: 0.75rem 1.5rem;
  border-radius: 0px;
  color: white;
  background-color: #eee;
  cursor: pointer;
  border: 1px solid #003087 ;
  font-size: 1rem;
  text-align: center;
  height: 15vh;
  position: relative;
  z-index: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
backdrop-filter: blur(2px);
  
}


button:hover{
    background-color:rgba(255, 255, 255, .8) ;
    transform: scale(1.03); /* gør knappen lidt større */
  box-shadow: 0 8px 20px rgba(0, 0, 0, .3);
}

button::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay */
  z-index: -1;
   transition: transform 0.3s ease;
  background: rgba(0, 0, 0, 0.4); /* lidt mørkere for mere kontrast */
  background-size: 110%; /* gør zoom mulig */
  background-position: center;
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