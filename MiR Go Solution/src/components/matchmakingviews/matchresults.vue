<script setup>
import { computed, defineProps } from 'vue'

// props define current filter selections and products + reset handler
const props = defineProps({
  products: Array,
  selectedIndustry: String,
  selectedWeight: [String, Number], // Weight might be stringified
  selectedFunction: String,
  onReset: Function // Reset function passed from mirgo.vue
})

// filters products.json based on selected industry, weight, and function
const filteredProducts = computed(() => {
  return props.products.filter((product) => {
    const matchesIndustry = !props.selectedIndustry || product.industry.includes(props.selectedIndustry)
    const matchesWeight = !props.selectedWeight || product.capacity.includes(Number(props.selectedWeight))
    const matchesFunction = !props.selectedFunction || product.function === props.selectedFunction
    return matchesIndustry && matchesWeight && matchesFunction
  })
})
</script>

<template>
  <div class="resultswrapper">
    <h2>Matching Products</h2>

      <!-- reset btn -->
    <button @click="props.onReset">Start Over</button>

    <!-- makes card for all -->
<div class="products">
  <div class="product-card"
    v-for="product in filteredProducts"
    :key="product.id"
    :style="{ backgroundImage: `url(${product.image})` }"
  >
    <div class="overlay"></div> <!-- Dark overlay covering entire card -->
    <div class="product-card-content">
      <h3>{{ product.name }}</h3>
      <p><strong>Industry:</strong> {{ product.industry.join(', ') }}</p>
      <p><strong>Capacity:</strong> {{ product.capacity.join(', ') }} kg</p>
      <p><strong>Function:</strong> {{ product.function }}</p>
    </div>
  </div>
</div>
    <!-- if no results matched -->
    <p v-if="filteredProducts.length === 0">No matching products found.</p>
  </div>

</template>



<style scoped>
.resultswrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  max-height: 100vh; 
  width: 100%;
  box-sizing: border-box;
  padding: 3rem; /* Add space if needed for scrollbar */

}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;

}

.product-card {
  position: relative;
  background-size: cover;
  background-position: center;
  color: white;
  width: 15vw;
  height: 20vh;
  border-radius: 0px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
}


.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.product-card-content {
  position: relative;
  z-index: 2;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  transition: all 0.3s ease;
}

.product-card-content p {
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: opacity 0.3s ease, height 0.3s ease;
  margin: 0;
}

.product-card-content strong {
  color: #ffffff;
  font-weight: 400;
}

.product-card-content h3 {
  color: #ffffff;
  margin-bottom: 0.5rem;
}

/* show info on hover */
.product-card:hover .product-card-content p {
  opacity: 1;
  height: auto;
  margin-top: 0.25rem;
  color: white;
  font-size: 12px;
}

h2 {
  color: #ffffff;
}

h3 {
  font-size: 1.15em;
  font-weight: 400;
}

button {
  color: #ffffff;
  background-color: #005cbf;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
}

p{
  color: white;
}
</style>