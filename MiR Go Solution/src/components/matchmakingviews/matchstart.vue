<script setup>
const TopModulIMG = "/productimgs/Nord Modules - Pallet Lift EU.webp"
</script>
<template>
<div class="MatchMakingStart">
    <div class="headerWrap">
        <div class="headerROW">
            <h1>Not sure where to begin</h1>

            <p>Our 3-step matchmaking system is designed to help you find the 
                appropriate top-modules for your task!</p>
        </div>
                <div class="columContainer">
                    <div class="imgcontainer">
            <img :src="TopModulIMG" alt="topmodul billede"/>
                    </div>

                    <div class="textButton">
                        <div class="matchText"></div>
                        <p>Tell us a little bit about the work you want completed,
                             and we will find the best solutions for you needs</p>
                        <div class="buttonWrap">
                            <button>Begin</button>
                        </div>
                </div>
        </div>
    </div>
</div>
</template>
<style>
.headerWrap{
    background-color: aqua;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    

}
.columContainer{
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 400px;
    flex: 1 1 1;

}
.imgcontainer{
    display: flex;
    height: 315px;
align-self: stretch;
}
.textButton{
    max-width: 466px;
    text-align: center;

}

</style>