<script setup>
import formImage from '../assets/form.png'
</script>
<template>
<section >
    <div class="featuresWrapper">
        <div class="featuresContent">
            
       
        <div class="featuresHeadline">
            <h2>You can count on us</h2>       
        </div>
        <div class="featuresBody">
            <p>When it comes to your intralogistics, we do everything we can to ensure that you are up and running and that you get maximum output of your MiR robots.</p>
        </div>
        <div class="featuresElements" >
            <div class="featuresElement">
                <div class="imgWrapperElementIcon">
                    <img src="https://a.storyblok.com/f/230581/30x30/3fee2f7424/icon_highlight_service.svg" alt="">

                </div>
                <p class="elementHeadline">Reliability</p>
                <p class="elementBody">We ensure seamless maintenance for your MiR robots.</p>
            </div>
            <div class="featuresElement">
                <div class="imgWrapperElementIcon">
                    <img src="https://a.storyblok.com/f/230581/30x30/b382a0f237/icon_industries_fastdevelopment.svg" alt="">

                </div>
                <p class="elementHeadline">Expertise</p>
                <p class="elementBody">Our experienced MiR Technical Support team is here to improve your logistics workflow.</p>
            </div>
            <div class="featuresElement">
                <div class="imgWrapperElementIcon">
                    <img src="https://a.storyblok.com/f/230581/30x30/35264f2483/icon_industries_increaseefficiency.svg" alt="">

                </div>
                <p class="elementHeadline">Responsiveness</p>
                <p class="elementBody">Our standardized digital setup guarantees a rapid response and minimal downtime.</p>
            </div>
            <div class="featuresElement">
                <div class="imgWrapperElementIcon">
                    <img src=https://a.storyblok.com/f/230581/30x30/75a0bc0b8a/icon_highlight_switch.svg alt="">

                </div>
                <p class="elementHeadline">Flexibility</p>
                <p class="elementBody">Our flexible service setup ensures rapid problem-solving and quick access to repairs.</p>
            </div>
            <div class="featuresElement">
                <div class="imgWrapperElementIcon">
                    <img src=https://a.storyblok.com/f/230581/30x30/15d2468c3c/icon_highlight_support.svg alt="">

                </div>
                <p class="elementHeadline">Availability</p>
                <p class="elementBody">MiR Service offers 24/7 availability for when you need us.</p>
            </div>
        </div>

        </div>

    </div>

</section>
<section>
    <div class="formsWrapper">
        <div class="formContent">
            <div class="formInformation">
                <div class="formHeadline">
                    <h2>Vores MiR-partnere er placeret mere end 250 steder rundt om i verden</h2>
                    
                </div>
                <div class="form body">
                        <p>Udfyld formularen, og bliv kontaktet af det lokale MiR-team.</p>
                   
                    <h3>
                        <b>Brug for hjælp eller teknisk support?</b>
                    </h3>
                </div>
                <div class="linkWrapper">
                    <a href="/da/service-support/mir-service-aktivering">Få mere at vide om MiR's servicemuligheder</a>
                </div>

            </div>
            <div class="formScript">
                <img :src="formImage" alt="Formular billede" />
            </div>
        </div>
    </div>
    <footer>
      
    </footer>

</section>
</template>
<style>

.featuresWrapper{
max-height: 485px;
max-width: 1150px;
margin: auto;
}
.featuresContent{
    display: flex;
   flex-direction: column;
   text-align: left;
   margin-top: 80px;
}

.featuresBody{
    max-width: 574px;
}
.formsWrapper{
display: flex;
flex-direction: row;
margin: 80px auto;
justify-content: center;
}

.formContent{
display: flex;
text-align: left;
align-content: flex-start;
}

.formInformation{
    width: 410px;
}

.featuresElements{
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(5,196px);
    gap: 30px  ;
}
.featuresElement{
margin: 10px;
max-width:600px;
min-width: 164px;
word-wrap: break-word;
}
.elementHeadline{
    font-weight: 600;
}
</style>