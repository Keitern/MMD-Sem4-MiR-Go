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
        :style="{ backgroundImage: `url(${product.image})` }">
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
  width: 100%;
  padding-top: 3vh;
  box-sizing: border-box;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 68%;
  margin-top: 1rem;
  padding-bottom: 5vh;
  box-sizing: border-box;
}

.product-card {
  flex: calc(33.333% - 1rem);
  max-width: 32%;
  height: 20vh;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
  box-sizing: border-box;
}

.product-card:hover {
  box-shadow:
    0 0 12px rgba(12, 9, 49, 0.6),
    0 0 12px rgba(114, 199, 231, 0.8);
}

.product-card-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  color: rgb(0, 48, 135);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.product-card:hover .product-card-content {
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.66);
}

.product-card h3{
  color: rgb(0, 48, 135); 
  font-weight: 600;
  background-color: rgba(255, 255, 255, 0.75); /* Black background initially */
  border-top: solid 1px rgba(0, 48, 135, 0.167);
  width: 100%;
  height: fit-content;
  padding: 1rem;
  font-size: 20px;
}

.product-card-content p {
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: opacity 0.3s ease, height 0.3s ease;
  font-size: 12px;
  padding: 0 1rem 0 1rem;
}

.product-card:hover .product-card-content h3{
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: fit-content;
  padding: 0.5rem 1rem 0rem 1rem;
}

.product-card:hover .product-card-content p {
  opacity: 1;
  height: auto;
  margin-top: 0.25rem;
}

.product-card:hover .product-card-content {
  background-color: rgba(0, 0, 0, 0.66); /* Show background on hover */
}

.product-card:hover .product-card-content h3,
.product-card:hover .product-card-content p,
.product-card:hover .product-card-content strong {
  color: white; /* Turn text white on hover */
}

h2 {
  color: white;
}

button {
  color: white;
  background-color: #005cbf;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
}
</style>