<template>
    <v-toolbar fixed light color="#fdd835">
      <v-toolbar-title class="headline text-uppercase">
        <span>Eduardo Regis </span>        
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <router-link :to="{ name: 'AboutMe' }" class="menu-btn">         
          <v-btn flat>          
            <a>Sobre Mim</a>
          </v-btn>
        </router-link> 
        <router-link :to="{ name: 'Projects' }" class="menu-btn">
          <v-btn flat>          
            <a>Projetos</a>
          </v-btn>
        </router-link> 
        <router-link :to="{ name: 'Interests' }" class="menu-btn">
          <v-btn flat>          
            <a>Tecnologias de Interesse</a>
          </v-btn>
        </router-link> 
        <router-link :to="{ name: 'Contact' }" class="menu-btn">
          <v-btn flat>          
            <a>Entre em Contato!</a>
          </v-btn>
        </router-link>  
    </v-toolbar>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .menu-btn {
        text-decoration: none;
        a {
            color: black;
        }
    }
</style>


