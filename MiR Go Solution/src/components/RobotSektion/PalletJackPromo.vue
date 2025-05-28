<script>

</script>
<template>
    <section class="palletJackPromo">
    <div>
        <div class="promoWrapper">
            <div class="promoContent">
                <div class="promoVideo">
                    <div class="palletJackMediaWrap">
                        <div class="PalletJackLink">
                            <a href="/da/produkter/robotter/mir1200-pallet-jack"></a>

                        </div>
                        <div class="palletJackMediaInnerWrap">
                            <div class="videoWrap">
                            <video
                                    poster="https://a.storyblok.com/f/230581/793x605/e796cfc68f/mir1200fallbacktestvideo.png/m/"
                                    autoplay
                                    loop
                                     muted
                                    playsinline
                                     width=100%
                                     height="auto"
                                    >
                                <source src="https://a.storyblok.com/f/230581/x/fda70a9ec8/mir1200palletjack-back.mp4">
                                            </video>

                            </div>
                        </div>
                        <div class="palletJackMediaWrapContent">
                            <h3 class="cardHeadline">MiR1200 Pallet Jack</h3>
                            <p>Move up to 1200 kg pallets automatically</p>
                        </div>                
                    </div>
                </div>
                <div class="promoText">
                    <div class="promoTitle">
                        <p>Smarter moves, faster results with the MiR1200 Pallet Jack dominating pallet handling</p>
                    </div>
                    <div class="linkWrapper">
                        <a href="da/din-amr-rejse">Explore the MiR1200 Pallet Jack</a>

                    </div>
                </div>

            </div>
        </div>
    </div>
    
</section>
<section class="promoWrapperCase">

    <div class="promoContentCase">
        <div class="promoImage">
            <div class="imageWrapper">
                <img src="https://a.storyblok.com/f/230581/4000x2667/0ea28dc3b7/logimat_pallet-jack_1.jpg/m/fit-in/1920x1080/filters:format(webp)" alt="">
            </div>
        </div>
        <div class="promoTextCase">
            <div class="labelWrapper">
                <span class="label label--light" aria-label="Label: Cases">Cases</span>
            </div>
            <div class="promoTitle">
                <p>See how leading companies are transforming logistics with MiR.

                  Join our upcoming events and webinars to learn how to scale automation, enhance safety, and drive ROI.</p>
            </div>
            <div class="linkWrapper">
                <a href="/da/cases"> Discover events & webinars </a>
            </div>
        </div>

    </div>

</section>

</template>
<style>
/*her fra kun jack*/
.promoWrapper{
   padding:0px 0px 0px 30px;
    max-width: 1150px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
}
.promoContent{
    
    width: 984px;
    height: 567px;
    display: grid;
    background-color: #fff;
    grid-template-columns: repeat(4,246px);
 grid-template-rows: repeat(4,126px);
}
.promoVideo{
     grid-area: 1/1/4/4;
}
.promoText{
    grid-area: 2/4/3/4;
    padding-top:50px;
}
.palletJackMediaWrap{
    display: grid;
     grid-template-columns: repeat(3,208px);
     grid-template-rows: repeat(3,157px)
}
.palletJackMediaInnerWrap{
grid-area: 1/1/3/5;
background-color: #fff;
    
}

.palletJackMediaWrapContent{
grid-area:2/1/2/3;
display: flex;
flex-direction: column;
background-color:transparent;
z-index: 1;
text-align: left;
padding-top: 40px;

}
.palletJackMediaWrapContent h3{
    background-color:transparent;
    margin: 0;
}
/* her fra kun case */
.promoContentCase{
    max-width: 1150px;
    max-height: 561px;
    justify-items: left;
    background-color:transparent;
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin: auto;
    
}
.promoImage{
    grid-area:1/1/2/3;
}
.promoTextCase{
    grid-area: 2/6/3/8;
    text-align: left;

}
.promoTextCase P{
font-size: 22px;
  color: #0c0931;
font-family: Oscine, sans-serif;
}
.labelWrapper{
        border-radius: 3px;
    display: inline-block;
    font-family: OpenSans, sans-serif;
    font-size: .75rem;
    height: 27px;
    line-height: 27px;
    padding: 0 10px;
}
.imageWrapper img{
    width: 820px;
    height: 440px;
    overflow: none;
}


</style>