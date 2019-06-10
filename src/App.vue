<template>
  <v-app dark align-center>
    <v-toolbar light color="#fdd835">
      <v-toolbar-title class="headline text-uppercase">
        <span>Eduardo Regis </span>        
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout style="margin-top: 10px" justify-center class="mb-2">          
        <v-btn class="menu-btn" flat>          
          <router-link :to="{ name: 'AboutMe' }"><a>Sobre Mim</a></router-link> 
        </v-btn>
        <v-btn class="menu-btn" flat>          
          <router-link :to="{ name: 'Projects' }"><a>Projetos</a></router-link> 
        </v-btn>
        <v-btn class="menu-btn" flat>          
          <router-link :to="{ name: 'Interests' }"><a>Áreas de Interesse</a></router-link> 
        </v-btn>
      </v-layout>  
      <v-spacer></v-spacer>
      <v-btn class="menu-btn" flat>          
          <router-link :to="{ name: 'Contact' }"><a>Entre em Contato!</a></router-link> 
        </v-btn>
    </v-toolbar>
    <v-content>
      <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
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
@import 'styles/slide.css';  
body{
  background: black;
}
.menu-btn a{
  color: black;
  text-decoration: none;
}
</style>

