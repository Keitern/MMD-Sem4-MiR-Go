<script>
</script>
<template>
    <section class="hero">
        <div class="hero-wrapper">
                <div class="hero-content">
                    <video autoplay muted loop playsinline class="hero__video">
                        <source src="https://a.storyblok.com/f/230581/x/03a56553f1/hero-runnercase.mp4" type="video/mp4" />
                    </video>
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

                </div>

            
        </div>
    </section>
    
</template>
<style>
.hero-wrapper{
    background-color: #effafe;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 30px;
    width: 100%;
}
.hero-content{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    max-height: 100%;
    overflow-x: clip;
    position: relative;
    background-color: red;
}
.hero-top{
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    grid-area: 2;
    height: 100%;
    justify-content: center;
    padding: 30px;
    width: 100%;
    background-color: beige;
}
.hero-video{
    grid-area: 1 / 1 / 2 / 5;
    height: auto;
    width: 100%;
    background-color: #effafe;
}
</style>