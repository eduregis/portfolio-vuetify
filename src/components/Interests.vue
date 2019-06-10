<template>
    <v-container grid-list-md>
        <br>
            <h1 class="headline text-uppercase " style="color: #fdd855">Áreas de Interesse</h1>
        <br>
        <v-divider class="amber lighten-1"></v-divider>
        <br>
        <v-layout row wrap>                
            <v-flex
                v-for="(card, index) in cards"
                :key="index"
                xs3
            >
                <v-card flat hover v-ripple>
                    <v-card-title                             
                        class="justify-space-between"
                        :class="card.color"                    
                    >        
                    <h2 class="display-1 black--text font-weight-light">{{ card.title }}</h2>
                    <img
                        :src="card.img"
                        height="32"
                        width="32"
                    />
                    </v-card-title>
                    <v-container>
                        <v-layout>
                            <v-flex>
                                {{ card.description }}
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container> 
</template>

<script>
  export default {
    data () {
        return {
            cards: [
                { 
                    title: 'HTML', 
                    img: require('../assets/interests-icons/html-5.png'),
                    description: 'É uma das linguagens que utilizamos para desenvolver websites. O acrônimo HTML vem do inglês e significa Hypertext Markup Language ou em português Linguagem de Marcação de Hipertexto.',
                    color:"red lighten-1"
                }, 
                { 
                    title: 'Photoshop', 
                    img: require('../assets/interests-icons/photoshop-adobe.png'),
                    description: 'Adobe Photoshop é um software caracterizado como editor de imagens bidimensionais do tipo raster (possuindo ainda algumas capacidades de edição típicas dos editores vectoriais) desenvolvido pela Adobe Systems.',
                    color:"pink lighten-2"
                }, 
                { 
                    title: 'Vue', 
                    img: require('../assets/interests-icons/vue.png'),
                    description: 'Vue é um framework progressivo para a construção de interfaces de usuário. Ao contrário de outros frameworks monolíticos, Vue foi projetado desde sua concepção para ser adotável incrementalmente.',
                    color:"green lighten-1"
                },                 
                { 
                    title: 'Java', 
                    img: require('../assets/interests-icons/java.png'),
                    description: 'Java é uma linguagem de programação orientada a objetos (comportamento dos objetos determinados por classes) lançada pela primeira vez pela Sun Microsystems em 1995. Possui sintaxe parecida com C++.',
                    color:"blue lighten-1"
                },
                { 
                    title: 'Angular', 
                    img: require('../assets/interests-icons/angular.png'),
                    description: 'Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações.',
                    color:"green lighten-1"
                }, 
                { 
                    title: 'Javascript', 
                    img: require('../assets/interests-icons/javascript.png'),
                    description: 'JavaScript é uma linguagem de programação baseada em scripts, criado para aplicações web e padronizada pela ECMA International (associação especializada na padronização de sistemas de informação).',
                    color:"red lighten-1"
                },  
                { 
                    title: 'C++', 
                    img: require('../assets/interests-icons/cpp.png'),
                    description: 'O C++ é uma linguagem de programação de nível médio, baseada na linguagem C. O desenvolvimento da linguagem começou na década de 80. O objetivo do desenvolvimento desta linguagem era melhorar uma versão do núcleo Unix.',
                    color:"blue lighten-1"
                }, 
                { 
                    title: 'Illustrator', 
                    img: require('../assets/interests-icons/illustrator.png'),  
                    description: 'Adobe Illustrator é um editor de imagens vetoriais. Foi criado inicialmente como complemento comercial de software de fontes da Adobe e da tecnologia PostScript desenvolvida pela empresa.',
                    color:"pink lighten-2"
                },
                { 
                    title: 'CSS', 
                    img: require('../assets/interests-icons/css-3.png'),                    
                    description: 'CSS é o acrônimo de Cascading Style Sheets que em português seria algo como “folhas de estilo em cascata”. Define como os elementos que compõem uma página, um documento ou aplicação Web serão exibidos.',
                    color:"red lighten-1"
                },
                 { 
                    title: 'SQL', 
                    img: require('../assets/interests-icons/database.png'), 
                    description: 'SQL é a linguagem de pesquisa declarativa padrão para banco de dados relacional (base de dados relacional). Muitas das características originais do SQL foram inspiradas na álgebra relacional.',
                    color:"blue lighten-1"
                }, 
            ]
        }
    },
    methods: {
        
    }
  }
</script>

<style>
.interest-card{
    margin-bottom: 20px;
    break-inside: avoid-column;
}
</style>
