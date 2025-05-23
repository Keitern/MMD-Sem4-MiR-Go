<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/MirGo">MiR Go</router-link>
    </nav>
    <router-view />
  </div>
</template>