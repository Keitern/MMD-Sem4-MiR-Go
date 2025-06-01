<script setup>
  // declares that this component can emit a custom event called 'next' to the parent
  defineEmits(['next'])
</script>

<template>
  <div class="match-wrapper">
  <div class="match-step">
    <h2>Welcome to MiR Go Matcher</h2>
    <!-- when button is clicked, emit 'next' to signal the parent (mirgo) to go next -->
    <button @click="$emit('next')">Start Matching</button>
  </div>
  </div>
</template>


<style scoped>

.match-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
  .match-step {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  h2{
  color:#ffffff
}
</style>