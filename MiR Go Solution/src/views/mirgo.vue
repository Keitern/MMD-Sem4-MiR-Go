<script setup>
import { ref, computed } from 'vue'
import Footer from '../components/footer.vue'
import productsData from '../../public/data/products.json'
import MatchStart from '../components/matchmakingviews/matchstart.vue'
import MatchIndustry from '../components/matchmakingviews/matchindustry.vue'
import MatchWeight from '../components/matchmakingviews/matchweight.vue'
import MatchFunction from '../components/matchmakingviews/matchfunction.vue'
import MatchResults from '../components/matchmakingviews/matchresults.vue'

// reactive step state and filter selections
const step = ref(0)
const selectedIndustry = ref(null)
const selectedWeight = ref(null)
const selectedFunction = ref(null)

const products = ref(productsData) // load all products from products.json

// makes filtered list based on slected industry weight function
const filteredProducts = computed(() => {
  return products.value.filter(product =>
    (!selectedIndustry.value || product.industry.includes(selectedIndustry.value)) &&
    (!selectedWeight.value || product.capacity.includes((selectedWeight.value))) &&
    (!selectedFunction.value || product.function === selectedFunction.value)
  )
})

// array of step components; determines which one to render
const steps = [MatchStart, MatchIndustry, MatchWeight, MatchFunction, MatchResults]
const currentStepComponent = computed(() => steps[step.value])

// reset btn, reset everything to initial state
function resetMatchmaking() {
  step.value = 0
  selectedIndustry.value = null
  selectedWeight.value = null
  selectedFunction.value = null
}

// prepares props to pass to the current child component
const stepProps = computed(() => {
  const props = {}

  if (step.value === 1) {
    props.products = products.value // passed for industry
  }

  if (step.value === 2) {
    props.products = products.value // passed for weight
  }

  if (step.value === 3) {
    props.products = products.value // only show functions from matching industry+weight
  }

  if (step.value === 4) {
  props.products = products.value
    props.selectedIndustry = selectedIndustry.value
    props.selectedWeight = selectedWeight.value || null // allow null/undefined
    props.selectedFunction = selectedFunction.value
    props.onReset = resetMatchmaking // passed to results component
  }

  return props
})

// Event listeners from children
function goToNextStep() {
  step.value++
}
function onIndustrySelected(value) {
  selectedIndustry.value = value
  step.value++
}
function onWeightSelected(value) {
  selectedWeight.value = value
  step.value++
}
function onFunctionSelected(value) {
  selectedFunction.value = value
  step.value++
}



// Static top module data
const modules = ref([
  {
    name: 'Enabled Robotics - MC600',
    image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
  },
  {
    name: 'ROEQ - TMS-C300 Ext',
    image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
  },
  {
    name: 'Nord Modules - PM800, Pallet Mover',
    image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
  },
  {
    name: 'Palomat - PALOMAT® AMR',
    image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
  },
  {
    name: 'Noll - Mobile Air Disinfection Top Module',
    image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
  },
  {
    name: 'Noll - Mobile Air Disinfection Top Module',
    image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
  },
  {
    name: 'Noll - Mobile Air Disinfection Top Module',
    image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
  },
  {
    name: 'Noll - Mobile Air Disinfection Top Module',
    image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
  },
  {
    name: 'Noll - Mobile Air Disinfection Top Module',
    image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
  },
])
</script>


<template>
  <div class="mir-go-page">
    <!-- Header -->
    <header class="header">
      <img src="https://mobile-industrial-robots.com/media/1019/mir-logo.png" alt="MiR Logo" class="logo" />
      <nav class="nav">
        <a href="#">Products</a>
        <a href="#">Your AMR Journey</a>
        <a href="#">Cases</a>
        <a href="#">Industries</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="mir-container">
        <h1>Extend the functionality with MiR Go top modules</h1>
        <p>
          In the fast-paced world of manufacturing, MiR offers a strategic advantage to forward-thinking organizations.
          <br><br>
          At our core, MiR is an open robot platform, finely tuned for seamless integration into daily operations. 
          We leverage our extensive knowledge of internal logistics automation and our expertise in software, navigation, and workflow optimization.
        </p>
      </div>
    </section>


    <div class="box-space-between">

        <!-- matchmaking Flow -->
        <section class="mirgo-matchmaking">
          <div class="match-container-scrollable">
              <!-- dynamic rendering of current step-->
            <component
              :is="currentStepComponent"
              v-bind="stepProps"
              @next="goToNextStep"
              @selectIndustry="onIndustrySelected"
              @selectWeight="onWeightSelected"
              @selectFunction="onFunctionSelected"
            />
          </div>
        </section>  

      <section class="mirgoslider">
        <div class="slideranimation">
          <div class="slidercontent">
            <div>
              <h2> Animation and text </h2>
            </div>
            <div>
              <h2>Easy mounting of top modules</h2>
              <p>
                The robots from MiR are highly flexible, and it is simple to deploy different top modules. <br><br>
                It is easy to connect the top module to the robot via accessible I/OS and four screws
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- fake modules -->
    <div class="fakeelement">Fake filter</div>

    <section class="modules">
      <div class="module-card" v-for="(module, index) in modules" :key="index">
        <img :src="module.image" :alt="module.name" />
        <h3>{{ module.name }}</h3>
      </div>
    </section>

    <div class="fakeelement">Pagination</div>

    <!-- bot text -->
    <section class="mirgo-bottomtext">
      <div class="bottomtext-textwidth">
        <p>
    In manufacturing facilities, where the demand for heightened efficiency, productivity, and innovation is ever-present, MiR Go serves as a powerful resource and inspiration hub. It houses applications and top modules tailored for seamless integration with MiR's suite of robots, delivering a substantial operational boost.
            <br><br>
    MiR Go is an exclusive ecosystem of over 160 off-the-shelf applications, designed and engineered to enhance the capabilities of MiR robots. With MiR Go Approved, a supplementary to MiR Go, you can rest assured that these applications have undergone testing by us, encompassing functionality, safety, and mutual change control. This ensures that MiR Go Approved products integrate seamlessly with MiR robots, upholding our high quality standards.
            <br><br>
    The key benefit of MiR Go is its ability to seamlessly customize MiR robots with off-the-shelf solutions, providing flexibility that empowers your company to excel in automation, embrace the future with confidence and a competitive edge by harnessing the full potential of MiR and MiR Go.
            <br><br>
    Disclaimer:
            <br><br>
    Mobile Industrial Robots are not responsible for the products displayed on the MiRGo platform. We only provide the information provided by the dealer partners, and the dealer partners are fully responsible for the product.
        </p>
      </div>
    </section>
  </div>
  
<Footer></Footer>
</template>

<style scoped>

.mirgo-matchmaking {
  height: 66vh;
  width: 75vw;
  background: linear-gradient(to right, #0C0931, #003087);
  display: flex;
  justify-content: center;
  margin: auto;
  overflow: hidden;
  padding: 1rem;
  border: 1px solid #ddd;
}

/* .match-container-scrollable {
  max-height: 100%;
  max-width: 100%;
  overflow-y: auto;
}

/* Optional: prettier scrollbar */
.match-container-scrollable::-webkit-scrollbar {
  width: 8px;
}
.match-container-scrollable::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

.fakeelement{
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

.mir-go-page {
  padding: 0 40px;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 80px;
  padding: 20px 0;
  max-width: 50vw;
  margin: 0 auto;
}

.logo {
  height: 40px;
}

.nav a {
  margin-left: 20px;
  text-decoration: none;
  font-weight: 400px;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 60px 20px;
  background-color: #fafdff;
  max-width: 100vw;
}

.mir-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 50vw;
}

.hero h1 {
  font-size: 4em;
  font-weight: 320;
}

.hero p {
  font-size: 1em;
  max-width: 800px;

}

.modules {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0px;
  padding: 0px;
  max-width: 50vw;
  margin: 0 auto;
}

.module-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fafdff;
  border: 1px solid #F9FDFF;
  width: 14vw;
  height: 20vh;
  text-align: center;
  padding: 20px;
  margin: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.module-card img {
  width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.module-card h3 {
  font-size: 1em;
  color: #555;
}

.slideranimation{
  display:flex;
  flex-direction: row;
  height: 50vh;
  background-color: #fafdff;
  justify-content: center;
  align-items: center;
}

.slidercontent{
  display:flex;
  flex-direction: row;
  max-width: 50vw;
  margin: 0 auto;
  gap: 80px;
}

.box-space-between {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.mirgo-bottomtext{
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
}

.bottomtext-textwidth{
    width: 66vw;
    padding-left: 6%;
}

.bottomtext-textwidth > p {
  max-width: 33vw;
  text-align: start !important;
}

</style>

