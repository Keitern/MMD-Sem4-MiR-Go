<!-- /src/views/Home.vue -->
<script setup>
import HeaderWrapper from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import RCardDisplay from '../components/RobotSektion/RobotCardDisplay.vue'
import PalletJackPromo from '../components/RobotSektion/PalletJackPromo.vue'
import FeaturesWrapper from '../components/FeaturesAndForms.vue'
import Footer from '../components/footer.vue'
</script>

<template>
  <div>
    <HeaderWrapper />
    <Hero />
    <RCardDisplay />
    <PalletJackPromo />
    <FeaturesWrapper />
  </div>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped>

</style>