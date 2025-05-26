<script>
</script>
<template>
    <section class="hero">
        <div class="hero-wrapper">
                <div class="hero-content">
                    <div class="hero-top">
                        <div class="hero-elements">
                            <div class="hero-headline">
                                <h1>Boost logistikken med MiR-robotter</h1>
            
                            </div>
                            <div class="hero-link">
                                <a href="da/din-amr-rejse">kom godt igang</a>

                            </div>
            
                        </div>
            
                    </div>
            <div class="hero-video">
                <div class="hero-gradient"> </div>   
                    <div class="hero-video-video">
                        <div class="video-wrapper">
                            <video autoplay muted loop playsinline>
                                <source src="https://a.storyblok.com/f/230581/x/03a56553f1/hero-runnercase.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>    
                
            </div>
        </div>

            
        </div>
    </section>
    
</template>
<style>
.hero-wrapper{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 30px;
    width: 100%;
}
.hero-content{
    top: 30px;
    display: grid;
 grid-template-columns: 1fr 984px 1fr;
    max-height: 100%;
    overflow-x: clip;
    position: relative;
    background-color: red;
    height: 600px;
   
}
.hero-top{
     grid-area: auto;
  left: 0;
  margin-left: 30px;
  position: absolute;
  top: 0;
  z-index: 2;
  top: 100px;
    }

.hero-elements{
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: flex-start;
    text-align: center;
    width: 100%;
    color: black;
    align-items:center;
    align-content: center;
    max-width: 60%;
    text-align: left;
    
}

.hero-headline h1{
    
 
color: #0c0931;
font-family: Oscine, sans-serif;
font-size: 44px;
font-weight: 300;
line-height: 52px;
}

.hero-video{
    grid-area: 1 / 1 / 3 / 4;
    height: auto;
    width: 100%;
    background-color: #22c04c;
}

.hero-gradient{
    opacity: .5;
    background: linear-gradient(90deg, #effafe 0, rgba(249, 253, 255, .75) 45%, transparent 70%), linear-gradient(270deg, #effafe 0, transparent 35%), linear-gradient(180deg, #effafe 0, transparent 25%), linear-gradient(0deg, #effafe 0, transparent 25%);
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
        background-color: #17d6e4;
}

.video-wrapper{
    align-items: center;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 100%;
    background-color: yellow;
}
.video-wrapper video{
    
    height: auto;
    outline: 4px solid #effafe;
    outline-offset: -4px;
    position: relative;
    width: 100%;
    z-index: 0;
    background-color: violet;
}
</style>