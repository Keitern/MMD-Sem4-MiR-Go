<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  products: Array,
  selectedIndustry: String,
  selectedWeight: [String, Number], // Weight may be numeric
  selectedFunction: String,
  onReset: Function
})

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
  <div>
    <h2>Matching Products</h2>
    <button @click="props.onReset">Start Over</button>
    <div class="product-grid">
      <div class="product-card" v-for="product in filteredProducts" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p><strong>Industry:</strong> {{ product.industry.join(', ') }}</p>
        <p><strong>Capacity:</strong> {{ product.capacity.join(', ') }} kg</p>
        <p><strong>Function:</strong> {{ product.function }}</p>
      </div>
    </div>
    <p v-if="filteredProducts.length === 0">No matching products found.</p>
  </div>
</template>

<style scoped>
.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.product-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  flex: 1 1 250px;
  max-width: 300px;
}
</style>