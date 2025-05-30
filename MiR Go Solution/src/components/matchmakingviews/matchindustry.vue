<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  products: Array
})
const emit = defineEmits(['selectIndustry'])

const uniqueIndustries = computed(() => {
  const allIndustries = props.products.flatMap(p => p.industry)
  return [...new Set(allIndustries)]
})

function selectIndustry(industry) {
  emit('selectIndustry', industry)
}
</script>


<template>
  <div class="match-step">
    <h2>Select Industry</h2>
    <button
      v-for="industry in uniqueIndustries"
      :key="industry"
      @click="selectIndustry(industry)"
    >
      {{ industry }}
    </button>
  </div>
</template>



<style scoped>
  .match-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    background-color: #eee;
    cursor: pointer;
    border: 1px solid #ccc;
    font-size: 1rem;
  }

  button:hover {
    background-color: #ddd;
  }
</style>