<script setup>
  defineEmits(['next'])
</script>


<template>
  <div class="match-step">
    <h2>Welcome to MiR Go Matcher</h2>
    <button @click="$emit('next')">Start Matching</button>
  </div>
</template>


<style scoped>
  .match-step {
    text-align: center;
    margin-top: 2rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
    background-color: #005cbf;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
</style>