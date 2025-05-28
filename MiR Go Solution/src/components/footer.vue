<template>
    <footer>
    <div class="footercontainer">
      <div class="topfooter">
        <div class="topfootercontent">
          <b>Lær om AMR'er </b>
          <div class="topfootercontentitems">
              <p>Kom i gang</p>
              <p>Hvad er en AMR?</p>
              <p>Vellykket implementering</p>
              <p>Produkter</p>
              <p>Cases</p>
          </div>
        </div>

        <div class="topfootercontent">
          <b>Populære links </b>
            <div class="topfootercontentitems">
              <p>Begivenheder</p>
              <p>Nyheder & Artikler</p>
              <p>e-bøger</p>
              <p>MiR Service</p>
              <p>Safety and Security updates</p>
            </div>
        </div>

        <div class="topfootercontent">
          <b>Om MIR </b>
            <div class="topfootercontentitems">
              <p> MiRs historie </p>
              <p> Karriere </p>
              <p> Ledige stillinger </p>
              <p> Newsletter </p>
            </div>
        </div>

        <div class="topfootercontent">
          <b>Mobile Industrial Robots A/S </b>
            <div class="topfootercontentitems">
              <p> Energivej 51 </p>
              <p> 5260 Odense S </p>
              <p> Denmark </p>
              <p> CVR: 29138060 </p>

              <p> mail@mir-robots.com </p>
              <p> +45 20 377 577 </p>


            </div>
        </div>
        

      </div>

      <div class="botfooter">

        <div class="botfootercontent">
          <div class="bottomfootercontentitems">
            <div> © Mobile Industrial Robots 2025 </div>
            <div> Skift sprog Privatlivspolitik Cookiepolitik </div>
            <div> Ikon + Ikon + Ikon + Ikon + Ikon </div>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<style scoped>
.bottomfootercontentitems{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 300;
}

.topfootercontentitems {
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  gap: 5px;
}

.topfootercontentitems > p{
  font-size: 16px;
  font-weight: 300;
}

.topfooteritems p{
  display:flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.topfooter{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 25vh;
  padding-top: 1vh;
}
.botfooter{
  width: 100%;
  height: 5vh;
}
.footercontainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 50vw;
  gap: 40px;
}

footer {
  width: 100%;
  margin-top: 10vh;
  padding: 5vh 0 5vh 0;
  background-color: #effafe;

}
</style>