<script setup>
  // declares that this component can emit a custom event called 'next' to the parent
  defineEmits(['next'])
</script>

<template>
  <div class="match-wrapper">
  <div class="match-text">
    <h2>Not sure where to start?</h2>
    <h3> Tell us a little bit about the work you want completed, 
      <br>and we will find the best solutions for your needs </h3>
    <!-- when button is clicked, emit 'next' to signal the parent (mirgo) to go next -->
    <button @click="$emit('next')">Start Matching 
      <div> 
        <svg width="28" height="28" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"> <polygon points="8,4 16,12 8,20" /> </svg> 
      </div>
    </button>
  </div>
 <!-- <div class="videowrapper">
    <div class="videoplaceholder">
      video placeholder
    </div>
  </div>-->
  </div>
</template>


<style scoped>

.match-wrapper{
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 10vw;
}
  
.videoplaceholder{
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.videowrapper{
  width: 25vw;
  height: 33vh;
  background-color: #ADAFAF;
  opacity: 66%;
}
.match-text {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 3vh;
}

.match-text h3{
  color: white;
  text-align: center;
}

button {
  font-family: "Oscine", sans-serif;
  font-size: 24px;
  color:#72C7E7;
  border: none;
  cursor: pointer;
  align-self: center;
  margin: 0;
  padding: 8px;
  display: flex;
  flex-direction: row;
}

button > div > svg{
  fill: #72C7E7;
}

button:hover{
  color:#56A0D3;
  transition: 0.2s;
}

button:hover > div > svg{
  fill:#56A0D3;
  transition: 0.2s;
  transform: translateX(6px);
}

h2{
color:#ffffff
}
</style>