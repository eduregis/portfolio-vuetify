<template>
    <v-container grid-list-md>
        <br>
            <h1 class="headline text-uppercase " style="color: #fdd855">Tecnologias de Interesse</h1>
        <br>
        <v-divider class="amber lighten-1"></v-divider>
        <br>
        <v-container 
            v-for="(category, index) in categories"
            :key="index"
        >
            <h2 class="headline" style="color: #fdd855">{{ category.title }}</h2>
            <div>                
                <div
                class="d-inline-block"
                    v-for="(card, i) in category.cards"
                    :key="i"
                >
                    <InterestCard :card="card"/>
                </div>
            </div>
        </v-container>        
    </v-container> 
</template>

<script>
import InterestCard from '../components/InterestCard.vue';
  export default {
      components: {
          InterestCard
      },
    data () {
        return {
            categories: [
                {
                    title: 'Frameworks de desenvolvimento - front-end',
                    cards: [
                        { 
                            title: 'Angular', 
                            img: require('../assets/interests-icons/angular.png'),
                            description: 'Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações.',
                            color:"red lighten-1"
                        },
                        {
                            title: 'React', 
                            img: require('../assets/interests-icons/react.png'),
                            description: 'O React é uma biblioteca JavaScript de código aberto para criar interfaces de usuário. É mantido pelo Facebook, Instagram e uma comunidade de desenvolvedores individuais e outras empresas.',
                            color:"blue lighten-2"
                        },
                        { 
                            title: 'Vue', 
                            img: require('../assets/interests-icons/vue.png'),
                            description: 'Vue é um framework progressivo para a construção de interfaces de usuário. Ao contrário de outros frameworks monolíticos, Vue foi projetado desde sua concepção para ser adotável incrementalmente.',
                            color:"green lighten-1"
                        },  
                    ]
                },
                {
                    title: 'Linguagens de programação - front-end',
                    cards: [
                        { 
                            title: 'HTML', 
                            img: require('../assets/interests-icons/html-5.png'),
                            description: 'É uma das linguagens que utilizamos para desenvolver websites. O acrônimo HTML vem do inglês e significa Hypertext Markup Language ou em português Linguagem de Marcação de Hipertexto.',
                            color:"red lighten-1"
                        },
                        { 
                            title: 'CSS', 
                            img: require('../assets/interests-icons/css-3.png'),                    
                            description: 'CSS é o acrônimo de Cascading Style Sheets que em português seria algo como “folhas de estilo em cascata”. Define como os elementos que compõem uma página, um documento ou aplicação Web serão exibidos.',
                            color:"blue lighten-1"
                        },
                        { 
                            title: 'Javascript', 
                            img: require('../assets/interests-icons/javascript.png'),
                            description: 'JavaScript é uma linguagem de programação baseada em scripts, criado para aplicações web e padronizada pela ECMA International (associação especializada na padronização de sistemas de informação).',
                            color:"orange lighten-1"
                        },
                    ]
                },
                {
                    title: 'Linguagens de programação - back-end',
                    cards: [
                        { 
                            title: 'Java', 
                            img: require('../assets/interests-icons/java.png'),
                            description: 'Java é uma linguagem de programação orientada a objetos (comportamento dos objetos determinados por classes) lançada pela primeira vez pela Sun Microsystems em 1995. Possui sintaxe parecida com C++.',
                            color:"red lighten-1"
                        },
                        { 
                            title: 'SQL', 
                            img: require('../assets/interests-icons/database.png'), 
                            description: 'SQL é a linguagem de pesquisa declarativa padrão para banco de dados relacional (base de dados relacional). Muitas das características originais do SQL foram inspiradas na álgebra relacional.',
                            color:"pink lighten-2"
                        },
                        { 
                            title: 'C++', 
                            img: require('../assets/interests-icons/cpp.png'),
                            description: 'O C++ é uma linguagem de programação de nível médio, baseada na linguagem C. O desenvolvimento da linguagem começou na década de 80. O objetivo do desenvolvimento desta linguagem era melhorar uma versão do núcleo Unix.',
                            color:"blue lighten-1"
                        },
                    ]
                },
                {
                    title: 'Ferramentas de design',
                    cards: [                        
                        { 
                            title: 'Photoshop', 
                            img: require('../assets/interests-icons/photoshop-adobe.png'),
                            description: 'Adobe Photoshop é um software caracterizado como editor de imagens bidimensionais do tipo raster (possuindo ainda algumas capacidades de edição típicas dos editores vectoriais) desenvolvido pela Adobe Systems.',
                            color:"blue lighten-1"
                        }, 
                        { 
                            title: 'Illustrator', 
                            img: require('../assets/interests-icons/illustrator.png'),  
                            description: 'Adobe Illustrator é um editor de imagens vetoriais. Foi criado inicialmente como complemento comercial de software de fontes da Adobe e da tecnologia PostScript desenvolvida pela empresa.',
                            color:"orange lighten-2"
                        },
                    ]
                },
                {
                    title: 'Desenvolvimento de jogos',
                    cards: [
                        { 
                            title: 'GameMaker', 
                            img: require('../assets/interests-icons/gamemaker.png'), 
                            description: 'GameMaker Studio é um motor de jogo proprietário, desenvolvido pela YoYo Games. O motor tem suporte a uma linguagem de script, chamada Game Maker Language, ou GML.',
                            color:"green lighten-1"
                        },
                    ]
                }
            ],
            interestCards: [  
                
            ]
        }
    },
    methods: {
        
    }
  }
</script>

