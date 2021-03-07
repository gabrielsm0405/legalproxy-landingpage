<template>
  <v-app>
    <Toolbar/>
    <v-main>
      <Init :screen_height="screen_height" id="init" />
      <Product :screen_height="screen_height" id="product" />
      <WhoWeAre :screen_height="screen_height" id="who_we_are" />
      <Trainings :screen_height="screen_height" id="trainings" />
      <Faq :screen_height="screen_height" id="faq" />
      <Contact :screen_height="screen_height" id="contact" />
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
  },
  data: () => ({
    screen_height: screen.height
  }),
  computed: {
    screen_height_change(){
      return screen.height
    }
  },
  watch: {
    screen_height_change(){
      this.screen_height = this.screen_height_change
    }
  }
};
</script>
