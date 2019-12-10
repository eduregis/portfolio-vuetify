<template>
  <v-container grid-list-md>
    <br>
      <h1 class="headline text-uppercase " style="color: #fdd855">Sobre Mim</h1>
    <br>
    <v-divider class="amber lighten-1"></v-divider>
    <br>
      <v-layout text-xs-center justify-center>        
        <v-flex xs8>
          <v-img            
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
          ></v-img>
          <br>
          <h1 style="color: #fdd855">Olá!</h1>
          <br>
          <h1 class="headline">{{ about }}</h1>
        </v-flex>      
      </v-layout> 
      <br><br><br> 
      <v-layout text-xs-center justify-center>        
        <v-flex xs4>
          <v-divider></v-divider>                
        </v-flex>    
      </v-layout>      
      <br><br><br>            
      <v-layout justify-center>
        <h2 style="color: #fdd855">Linha do tempo</h2>
         <br><br><br>
      </v-layout>
      <v-layout justify-center>
        <v-flex xs6>
          <v-timeline>
            <v-timeline-item
              v-for="(item, index) in items"
              :key="index"
              :color="item.color"
              large
              >
              <template v-slot:opposite>
                <span>{{ item.year }}</span>
              </template>                        
              <v-card>
                <v-card-title :class="item.color">                            
                  <h2 class="black--text font-weight-light">{{ item.title }}</h2>
                </v-card-title>
                <v-container>
                  <v-layout>
                    <v-flex>
                      {{ item.description }}
                    </v-flex>                                    
                  </v-layout>
                </v-container>
              </v-card>
          </v-timeline-item>                
        </v-timeline>
      </v-flex>
    </v-layout>    
  </v-container> 
</template>

<script>
  export default {
    data: () => ({
      about: 'Meu nome é Luís Eduardo Regis de Oliveira, tenho 23 anos e trabalho com criação de websites e aplicativos. '
        + 'Moro em Fortaleza, Ceará. Atualmente sou aluno do curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará. '
        + 'Também sou bolsista do Laboratório de Mídias Educacionais. '
        + 'Tenho interesse em desenvolvimento front-end, back-end, design, ilustração e jogos. Dá uma conferida nos meus projetos!',
      socialIcons: [
        require('@/assets/projects-images/beep/beep_01.png'),
        require('@/assets/projects-images/beep/beep_02.png'),
        require('@/assets/projects-images/beep/beep_03.png')
      ],
      items: [
        {
          color: 'red lighten-1',
          title: 'Escola',
          description: 'Fiz da Pré-escola até o 4º ano na Escola Menino Dourado.',
          year: '1999 - 2005'
        },
        {
          color: 'pink lighten-2',
          title: 'Ensino Fundamental',
          description: 'Fiz do 5º até o 9º ano no Colégio Mater Amabilis (CMA).',
          year: '1999 - 2005'
        },
        {
          color: 'blue lighten-1',
          title: 'Ensino Médio',
          description: 'Me formei no Colégio Lourenço Filho.',
          year: '2011 - 2013'
        },
        {
          color: 'green lighten-1',
          title: 'Ensino Superior',
          description: 'Ingressei no Curso de Bacharelado em Matemática Industrial pela Universidade Federal do Ceará (UFC).',
          year: '2014 - 2017'
        },
         {
          color: 'red lighten-1',
          title: 'Bolsa',
          description: 'Trabalhei como Bolsista de TI na Secretaria de Tecnologia da Informação (STI).',
          year: '2017 - 2018'
        },
        {
          color: 'pink lighten-2',
          title: 'Ensino Superior',
          description: 'Me transferi para o Curso de Bacharelado em Sistemas e Mídias Digitais pela Universidade Federal do Ceará (UFC).',
          year: '2017 - '
        },
        {
          color: 'blue lighten-1',
          title: 'Bolsa',
          description: 'Entrei para o Laboratório de Mídias Educacionais (LME).',
          year: '2019'
        }
      ]
    })
  }
</script>