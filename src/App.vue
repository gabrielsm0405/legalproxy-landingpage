<template>
  <v-app>
    <Toolbar/>
    <v-main>
      <Init id="init" />
      <Product id="product" />
      <WhoWeAre id="who_we_are" />
      <Trainings id="trainings" />
      <Faq id="faq" />
      <Contact id="contact" />
    </v-main>
    <Footer />
  </v-app>
</template>

<style src="./scss/styles.css"></style>

<script>
import Toolbar from './components/Toolbar';
import Init from './components/Init.vue';
import Product from './components/Product.vue';
import WhoWeAre from './components/WhoWeAre.vue';
import Trainings from './components/Trainings.vue';
import Contact from './components/Contact.vue';
import Faq from './components/Faq.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Toolbar,
    Init,
    Product,
    WhoWeAre,
    Trainings,
    Contact,
    Faq,
    Footer
  }
};
</script>
