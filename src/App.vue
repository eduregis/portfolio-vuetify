<template>
  <v-app dark>
    <v-toolbar light color="#fdd835">
      <v-toolbar-title class="headline text-uppercase">
        <span>Eduardo Regis </span>        
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout justify-center class="mb-2">
        <v-btn flat>          
          Sobre mim          
        </v-btn>        
        <v-btn flat>
          Projetos          
        </v-btn>
        <v-btn flat>
          Áreas de Interesse          
        </v-btn>        
      </v-layout>  
      <v-spacer></v-spacer>
      <v-btn flat>
        <span class="mr-2">Entre em Contato!</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <!-- <Interests/> -->
      <AboutMe/>
    </v-content>
  </v-app>
</template>

<script>
import Interests from './components/Interests'
import AboutMe from './components/AboutMe'

export default {
  name: 'App',
  components: {
    Interests,
    AboutMe
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

