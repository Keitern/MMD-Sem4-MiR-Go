<script setup>

valdesbranch
import hero from './Components/Hero.vue'
import RCardDisplay from './Components/RobotSektion/RobotCardDisplay.vue'
import palletJackPromo from './Components/RobotSektion/PalletJackPromo.vue'
import featuresWrapper from './Components/FeaturesAndForms.vue'
import headerWrapper from './components/Header.vue'

</script>

<template>
<headerWrapper/>
<hero/>
<RCardDisplay/>
<palletJackPromo/>
<promoWrapperCase/>
<featuresWrapper/>
</template>

<style scoped>

</style>
=======
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
 main
