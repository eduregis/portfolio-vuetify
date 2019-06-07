<template>
  <v-app dark>
    <v-toolbar light color="#fdd835">
      <v-toolbar-title class="headline text-uppercase">
        <span>EDUARDO REGIS </span>        
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="font-weight-light">SOBRE MIM</span>
      <span class="font-weight-light">PROJETOS</span>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
body{
  background: black;
}
</style>

