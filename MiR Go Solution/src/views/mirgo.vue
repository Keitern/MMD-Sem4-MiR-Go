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
      <h1>Extend the functionality with MiR Go top modules</h1>
      <p>
        In the fast-paced world of manufacturing, MiR offers a strategic advantage to forward-thinking organizations.
        At our core, MiR is an open robot platform, finely tuned for seamless integration into daily operations.
      </p>
    </section>

    <!-- Top Modules Grid -->
    <section class="modules">
      <div class="module-card" v-for="(module, index) in modules" :key="index">
        <img :src="module.image" :alt="module.name" />
        <h3>{{ module.name }}</h3>
      </div>
    </section>
  </div>
</template>

<style scoped>
.mir-go-page {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
  padding: 0 120px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
}

.logo {
  height: 40px;
}

.nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.hero {
  text-align: center;
  padding: 60px 20px;
  background-color: #f9f9f9;
}

.hero h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2em;
  max-width: 800px;
  margin: 0 auto;
}

.modules {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 40px 0;
}

.module-card {
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  width: 200px;
  text-align: center;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
</style>

