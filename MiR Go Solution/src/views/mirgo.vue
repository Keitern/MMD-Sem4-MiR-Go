<script>

export default {
  name: 'MiRGo',
  data() {
    return {
      modules: [
        {
          name: 'Enabled Robotics - MC600',
          image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
        },
        {
          name: 'ROEQ - TMS-C300 Ext',
          image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
        },
        {
          name: 'Nord Modules - PM800, Pallet Mover',
          image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
        },
        {
          name: 'Palomat - PALOMAT® AMR',
          image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
        },
        {
          name: 'Noll - Mobile Air Disinfection Top Module',
          image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
        },
        {
          name: 'Noll - Mobile Air Disinfection Top Module',
          image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
        },
        {
          name: 'Noll - Mobile Air Disinfection Top Module',
          image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
        },
        {
          name: 'Noll - Mobile Air Disinfection Top Module',
          image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
        },
        {
          name: 'Noll - Mobile Air Disinfection Top Module',
          image: 'https://mobile-industrial-robots.com/media/1019/mir-logo.png',
        },
      ],
    };
  },
};
</script>

<template>

  <div class="mir-go-page">
    <!-- Header -->
    <header class="header">
      <img src="https://mobile-industrial-robots.com/media/1019/mir-logo.png" alt="MiR Logo" class="logo" />
      <nav class="nav">
        <a href="#">Products</a>
        <a href="#">Your AMR Journey</a>
        <a href="#">Cases</a>
        <a href="#">Industries</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="mir-container">
        <h1>Extend the functionality with MiR Go top modules</h1>
        <p>
          In the fast-paced world of manufacturing, MiR offers a strategic advantage to forward-thinking organizations.
          <br> <br> At our core, MiR is an open robot platform, finely tuned for seamless integration into daily operations. 
          We leverage our extensive knowledge of internal logistics automation and our expertise in software, navigation, and workflow optimization.
        </p>
      </div>
    </section>

    <div class="box-space-between">
    <section class="mirgoslider">
      <div class="slideranimation">
       
        <div class="slidercontent">
          <div>
            <h2> Animation and text </h2>
          </div>

          <div>
            <h2>
              Easy mounting of top modules
            </h2>
            <p>
              The robots from MiR are highly flexible, and it is simple to deploy different top modules. <br><br>
              It is easy to connect the top module to the robot via accessible I/OS and four screws
            </p>
          </div>
        </div>
       
      </div>
    </section>

    <section class="mirgoslider">
      <div class="slideranimation">
        <div class="slidercontent">
          <div>
            <h2> Animation and text </h2>
          </div>
        
          <div>
            <h2>
              Easy mounting of top modules
            </h2>
            <p>
              The robots from MiR are highly flexible, and it is simple to deploy different top modules. <br><br>
              It is easy to connect the top module to the robot via accessible I/OS and four screws
            </p>
          </div>
        </div>
       
      </div>
    </section>
    </div>


    <!-- Top Modules Grid -->
     <div class="fakeelement">
        Fake filter
     </div>
    <section class="modules">
      <div class="module-card" v-for="(module, index) in modules" :key="index">
        <img :src="module.image" :alt="module.name" />
        <h3>{{ module.name }}</h3>
      </div>
    </section>
    <div class="fakeelement">
      Pagination
    </div>
  
    <section class="mirgo-bottomtext">
      <div class="bottomtext-textwidth">
        <p>
          In manufacturing facilities, where the demand for heightened efficiency, productivity, and innovation is ever-present, MiR Go serves as a powerful resource and inspiration hub. It houses applications and top modules tailored for seamless integration with MiR's suite of robots, delivering a substantial operational boost.
          <br><br>
          MiR Go is an exclusive ecosystem of over 160 off-the-shelf applications, designed and engineered to enhance the capabilities of MiR robots. With MiR Go Approved, a supplementary to MiR Go, you can rest assured that these applications have undergone testing by us, encompassing functionality, safety, and mutual change control. This ensures that MiR Go Approved products integrate seamlessly with MiR robots, upholding our high quality standards.
          <br><br>
          The key benefit of MiR Go is its ability to seamlessly customize MiR robots with off-the-shelf solutions, providing flexibility that empowers your company to excel in automation, embrace the future with confidence and a competitive edge by harnessing the full potential of MiR and MiR Go.
        </p>
      </div>

    </section>

  
  </div>

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

.fakeelement{
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

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

.mir-go-page {
  padding: 0 40px;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 80px;
  padding: 20px 0;
  max-width: 50vw;
  margin: 0 auto;
}

.logo {
  height: 40px;
}

.nav a {
  margin-left: 20px;
  text-decoration: none;
  font-weight: 400px;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 60px 20px;
  background-color: #F9FDFF;
  max-width: 100vw;
}

.mir-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 50vw;
}

.hero h1 {
  font-size: 4em;
  font-weight: 320;
}

.hero p {
  font-size: 1em;
  max-width: 800px;

}

.modules {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0px;
  padding: 0px;
  max-width: 50vw;
  margin: 0 auto;
}

.module-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #F9FDFF;
  width: 14vw;
  height: 20vh;
  text-align: center;
  padding: 20px;
  margin: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.module-card img {
  width: 100%;
  height: auto;
  margin-bottom: 15px;
}

.module-card h3 {
  font-size: 1em;
  color: #555;
}

.slideranimation{
  display:flex;
  flex-direction: row;
  height: 50vh;
  background-color: #cacaca;
  justify-content: center;
  align-items: center;
}

.slidercontent{
  display:flex;
  flex-direction: row;
  max-width: 50vw;
  margin: 0 auto;
  gap: 80px;
}

.box-space-between {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.mirgo-bottomtext{
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
}

.bottomtext-textwidth{
  margin: 0 auto;
  max-width: 33vw;
  padding-right: 23%;
}

.bottomtext-textwidth p {
  text-align: left !important;
}



</style>

