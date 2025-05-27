<script setup>
import formImage from '../assets/form.png'
</script>
<template>
<section >
    <div class="featuresWrapper">
        <div class="featuresContent">
            
       
        <div class="featuresHeadline">
            <h2>Du kan stole på os</h2>       
        </div>
        <div class="featuresBody">
            <p>Når det gælder din intralogistik, gør vi alt, hvad vi kan, for at sikre, at du er oppe at køre, og at du får maksimalt udbytte af dine MiR-robotter.</p>
        </div>
        <div class="featuresElements" >
            <div class="featuresElement">
                <div class="imgWrapperElementIcon">
                    <img src="https://a.storyblok.com/f/230581/30x30/3fee2f7424/icon_highlight_service.svg" alt="">

                </div>
                <p class="elementHeadline">Pålidelig</p>
                <p class="elementBody">Vi sikrer problemfri vedligeholdelse af dine MiR-robotter.</p>
            </div>
            <div class="featuresElement">
                <div class="imgWrapperElementIcon">
                    <img src="https://a.storyblok.com/f/230581/30x30/b382a0f237/icon_industries_fastdevelopment.svg" alt="">

                </div>
                <p class="elementHeadline">Ekspertise</p>
                <p class="elementBody">Vores erfarne MiR Technical Support-team er her for at forbedre dit logistiske workflow.</p>
            </div>
            <div class="featuresElement">
                <div class="imgWrapperElementIcon">
                    <img src="https://a.storyblok.com/f/230581/30x30/35264f2483/icon_industries_increaseefficiency.svg" alt="">

                </div>
                <p class="elementHeadline">Reaktionsdygtighed</p>
                <p class="elementBody">Vores standardiserede digitale setup garanterer hurtig respons og minimal nedetid.</p>
            </div>
            <div class="featuresElement">
                <div class="imgWrapperElementIcon">
                    <img src=https://a.storyblok.com/f/230581/30x30/75a0bc0b8a/icon_highlight_switch.svg alt="">

                </div>
                <p class="elementHeadline">Fleksibilitet</p>
                <p class="elementBody">Vores fleksible service-setup sikrer hurtig problemløsning og hurtig adgang til reparationer.</p>
            </div>
            <div class="featuresElement">
                <div class="imgWrapperElementIcon">
                    <img src=https://a.storyblok.com/f/230581/30x30/15d2468c3c/icon_highlight_support.svg alt="">

                </div>
                <p class="elementHeadline">Tilgængelighed</p>
                <p class="elementBody">MiR Service tilbyder tilgængelighed 24/7, når du har brug for os.</p>
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

</section>
</template>
<style>

.featuresWrapper{
max-height: 485px;
max-width: 1410px;
}
.featuresContent{
    display: flex;
   flex-direction: column;
   text-align: left;
}
.featuresHeadline{
  
}
.featuresBody{
    max-width: 574px;
}
.formsWrapper{
max-height: auto;
max-width: 1410px;
}
.formContent{

width: 984px;
display: flex;
text-align: left;
align-content: flex-start;
}
.formInformation{
    width: 410px;
}
.featuresElements{
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
.formScript{
    width: 492px;
    height: 1308px;
    
}
</style>