<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav class="sticky-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/MirGo">MiR Go</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.sticky-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>