<template>
    <v-container grid-list-md>
        <br>
            <h1 class="headline text-uppercase " style="color: #fdd855">Sobre Mim</h1>
        <br>
        <v-divider class="amber lighten-1"></v-divider>
        <br>
        <v-layout row wrap>                
            <v-flex xs6>
                aaaa
            </v-flex>
            <v-flex xs6>
                <v-timeline>
                    <v-timeline-item
                        v-for="item in items"
                        :key="item"
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
      items: [
        {
          color: 'red lighten-1',
          title: 'Ensino Médio',
          description: 'Me formei no Colégio Lourenço Filho.',
          year: '2011 - 2013'
        },
        {
          color: 'pink lighten-2',
          title: 'Ensino Superior',
          description: 'Ingressei no Curso de Bacharelado em Matemática Industrial pela Universidade Federal do Ceará (UFC).',
          year: '2014 - 2017'
        },
        {
          color: 'green lighten-1',
          title: 'Ensino Superior',
          description: 'Me transferi para o Curso de Bacharelado em Sistemas e Mídias Digitais pela Universidade Federal do Ceará (UFC).',
          year: '2017 - '
        },
        {
          color: 'blue lighten-1',
          title: 'Estágio',
          description: 'Entrei para o Laboratório de Mídias Educacionais (LME).',
          year: '2019'
        }
      ]
    })
  }
</script>