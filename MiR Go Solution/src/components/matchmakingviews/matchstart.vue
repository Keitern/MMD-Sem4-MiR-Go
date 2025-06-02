<script setup>
  // declares that this component can emit a custom event called 'next' to the parent
  defineEmits(['next'])
</script>

<template>
  <div class="match-wrapper">
    <div class="match-step">
        <h2>Not sure where to begin?</h2>
        <p>Our 3-step matchmaking system is designed to help you find the 
        appropriate top-modules for your task!</p>
        <div class="pictureButton">
            <!-- when button is clicked, emit 'next' to signal the parent (mirgo) to go next -->
            <div class="imgwrapper">
                <img src="/productimgs/0.webp" alt="">
            </div>
            <div class="buttonWrap">
                <p>Tell us a little bit about the work you want completed, and we will find the best solutions for you needs</p>
                <button @click="$emit('next')">Start Matching</button>
            </div>
        </div>
    </div>
  </div>
</template>


<style scoped>

.match-wrapper{
    width: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.match-wrapper p{
    color: #ffffff;
    opacity:.8 ;
}
  .match-step {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .pictureButton{
    display: flex;
    flex-direction: row;
    align-content: center;
    gap: 32px;
  }
  .imgwrapper{
    display: flex;
  }
  .imgwrapper img{
    display: flex;
    max-width: 466px;
    max-height: 315px;
    background-color: aqua;

  }
  .buttonWrap{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    max-width: 466px;
    text-align: center;
    gap: 20px;

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