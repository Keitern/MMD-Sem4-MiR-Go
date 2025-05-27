<script>
</script>
<template>
<section>
    <div class="headerWrapper">
        <div class="mainNavigation">
            <div class="navWrapper">
                <div class="mirLinkLogo">
                    <a href="/da">
                        <img src="https://mobile-industrial-robots.com/logo/mir-main-logo.svg"width="101" height="45" alt="logo">
                    </a>
                </div>
                <div class="mainNavigationItems">
                    <ul class="mainNavItems">
                <li>
                <div class="linkWrapper">
                    <a href="produkter">Produkter</a>
                </div>
            </li>
            <li>
                <div class="linkWrapper">
                    <a href="din-amr-rejse">din-amr-rejse</a>
                </div>
            </li>
            <li>
                <div class="linkWrapper">
                    <a href="cases">cases</a>
                </div>
            </li>
            <li>
                <div class="linkWrapper">
                    <a href="industrier">industrier</a>
                </div>
            </li>
            <li>
                <div class="linkWrapper">
                    <a href="Om MIR">OM MiR</a>
                </div>
            </li>
            <li>
                <div class="linkWrapper">
                    <a href="kontakt">Kontakt</a>
                </div>
            </li>
            </ul>
                </div>
                <div class="secondNavigation">
                    <button class="navDropDownB">service and support
                        <img src="https://a.storyblok.com/f/230581/9x6/8cecdca15f/arrow-down.svg?cv=1695125714195" alt="dropDownArrow">
                    </button>
                <div class="navSearchWrapper">
                    <button class="searchIcon">
                        <img src="https://a.storyblok.com/f/230581/21x21/ebbdca38d3/search-icon.svg?cv=1695125825901" alt="searchicon">
                    </button>
                </div> 
                <div class="portalswitchWrapper">
                    <button class="portalSwitch">
                        <img src="https://a.storyblok.com/f/230581/14x12/1b00a4a551/portal-switcher.svg?cv=1712916615032" alt="">
                    </button>
                </div>
                </div>
            </div>
        </div>

    </div>
</section>
</template>
<style>
.headerWrapper{
    display: flex;
        background-color: #fff;
    height: 72px;
    left: 0;
    padding-bottom: 15px;
    position: fixed;
    right: 0;
    top: 0;
    transition: transform .3s ease-in-out;
    z-index: 99;
    justify-content: center;
}

.mainNavigation{
   box-sizing: border-box;
}
.navWrapper{
    display: flex;
   background-color: #fff;
   flex-direction: row;
   justify-content: space-between;
   margin: auto;
   gap: 0;
   align-items: center;
   max-width: 984px;
   max-height: 50px;
   width: 984px;
   margin-top:15px;


   
}
.mirLinkLogo{
display: flex;
width: 83.285px;
height: 37px;
justify-content: center;
align-items: center;
flex-shrink: 0;
box-sizing: border-box;

}
.mainNavigationItems{
    display: flex;
    align-items: center;
    flex-direction:row;
    justify-content: space-between;
    gap: 30px;
    padding-left: 30px;
    white-space:nowrap;
    background-color:#fff;
    width: 100%;
    max-height: 40px;

    
}
.mainNavItems{
    display: flex;
    justify-content: space-between;
    flex-direction:row;
    align-items: center;
    background-color: #fff;
    list-style: none;
    padding: 10px 10px 10px 30px;
}
.linkWrapper{
    display: flex;
    background-color:#fff;
    margin: 10px;
    align-items: center;
    font: 14px "Open Sans", sans-serif;

    
}
.linkWrapper a{
   background-color: transparent;
    display: inline-block;
    margin: -10px;
    padding: 10px;
    pointer-events: auto;
    position: relative;
    background-color:#fff;
}
.secondNavigation{
background-color: #fff;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
gap: 15px;
}
.navDropDownB{
    font-size: .875rem;
    font-weight: 300;
white-space: nowrap;
}
    



</style>