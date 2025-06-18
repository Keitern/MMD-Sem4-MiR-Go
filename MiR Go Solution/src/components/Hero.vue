<script>
</script>
<template>
    <section class="hero">
        <div class="hero-wrapper">
                <div class="hero-content">
                    <div class="hero-top">
                        <div class="hero-elements">
                            <div class="hero-headline">
                                <h1>Boost logistics with MiR Robots</h1>
            
                            </div>
                            <div class="hero-link">
                                <a href='/MirGo' class="button">MirGo</a>

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
    width: 1150px;
    margin: auto;
}
.hero-content{
    top:30px;
   display: flex;
    max-height: 100%;
    overflow-x: clip;
    position: relative;
    background-color:transparent;
    height: 600px;
   
}
.hero-top{
  left: 0;
  margin-left: 30px;
  position: absolute;
  z-index: 2;
  top:170px;
  justify-content: flex-start;
  background-color: transparent;
    }

.hero-elements{
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 60%;
    text-align: left;
    background-color:transparent;
    align-items: left;
    
}

.hero-headline h1{
color: #0c0931;
font-family: Oscine, sans-serif;
font-size: 44px;
font-weight: 300;
line-height: 52px;
}
.button{
    display: flex;
   color: #17d6e4;
    justify-content: flex-start;
    font-size:16px;
    font-weight: 600;
    border: #effafe;
    padding: 7px 30px 7px 30px;
     display: inline-block;
    
}

.hero-video{
    height: auto;
    width: 100%;
    background-color:#fff;
}

.hero-gradient{
    opacity:.7;
    background: linear-gradient(90deg, #effafe 0, rgba(249, 253, 255, .75) 45%, transparent 70%), linear-gradient(270deg, #effafe 0, transparent 35%), linear-gradient(180deg, #effafe 0, transparent 25%), linear-gradient(0deg, #effafe 0, transparent 25%);
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 2000px;
        width: 100%;
        z-index: 1;
        background-color: #17d6e4;
       
}

.video-wrapper{
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    background-color: #fff;
}
.video-wrapper video{
    
    height: auto;
    outline: 4px solid #effafe;
    outline-offset: -4px;
    position: relative;
    width: 100%;
    z-index: 0;
    background-color: violet;
    box-shadow: 30px 0 15px 30px #effafe;
}
</style>