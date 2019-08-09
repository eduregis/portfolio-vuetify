<template>
  <v-app dark align-center>
    <Header />
    <v-content>
      <br><br><br>
      <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
@import 'styles/slide.css';  
</style>

