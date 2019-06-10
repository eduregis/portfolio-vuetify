<template>
  <v-app dark align-center>
    <v-toolbar fixed light color="#fdd835">
      <v-toolbar-title class="headline text-uppercase">
        <span>Eduardo Regis </span>        
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout style="margin-top: 10px" justify-center class="mb-2"> 
        <router-link :to="{ name: 'AboutMe' }">         
          <v-btn class="menu-btn" flat>          
            <a>Sobre Mim</a>
          </v-btn>
        </router-link> 
        <router-link :to="{ name: 'Projects' }">
          <v-btn class="menu-btn" flat>          
            <a>Projetos</a>
          </v-btn>
        </router-link> 
        <router-link :to="{ name: 'Interests' }">
          <v-btn class="menu-btn" flat>          
            <a>Áreas de Interesse</a>
          </v-btn>
        </router-link> 
      </v-layout>  
      <v-spacer></v-spacer>
      <router-link :to="{ name: 'Contact' }">
        <v-btn class="menu-btn" flat>          
          <a>Entre em Contato!</a>
        </v-btn>
      </router-link> 
    </v-toolbar>    
    <v-content>
      <br><br><br>
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

