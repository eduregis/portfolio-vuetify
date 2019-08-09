<template>
    <v-container grid-list-md>
        <br>
            <h1 class="headline text-uppercase " style="color: #fdd855">Projetos</h1>
        <br>
        <v-divider class="amber lighten-1"></v-divider>
        <br>
        <v-layout row wrap>
            <v-flex xs7>
                <v-layout row wrap>
                    <v-flex 
                        v-for="j in 2"
                        :key="j"
                        text-xs-center 
                        wrap 
                        xs6
                    >   
                        <div :class="{'second-column': j==2}"> 
                        <v-flex 
                            v-for="(card, index) in projectCards"
                            :key="index"
                        >
                            <div v-if="index%2 == j-1">
                                <v-card                        
                                    hover
                                    v-ripple
                                    @click="detailProject(index)"
                                >
                                    <v-card-title                             
                                        class="justify-space-between" 
                                        :class="card.color"
                                    >        
                                        <h2 class="black--text font-weight-light">{{ card.title }}</h2>
                                        <div>                           
                                            <img 
                                                v-for="(icon, i) in card.iconsTools"
                                                :key="i"                                
                                                :src="icon"
                                                style="margin-left: 10px"
                                                height="32"
                                                width="32"
                                            />                          
                                        </div>                        
                                    </v-card-title>
                                    <v-img
                                        :src="card.img"
                                    ></v-img>                   
                                </v-card>
                            </div>                    
                        </v-flex> 
                    </div>               
                </v-flex> 
                </v-layout>
            </v-flex> 
            <v-flex
                text-xs-center 
                wrap 
                xs5
            >            
                <v-card elevation="24">                    
                    <v-card-title>
                        <h2 v-if="cardIndex == -1">Clique em um projeto para ver os detalhes...</h2>
                        <h2 v-else>{{ projectCards[cardIndex].title }}</h2>
                    </v-card-title>
                    <div v-if="cardIndex != -1">
                        <v-divider></v-divider> 
                            <v-container align-content-start> 
                                <div class="text-sm-left">
                                    Tags: 
                                    <v-chip 
                                        v-for="(tag, index) in projectCards[cardIndex].tags"
                                        :key="index"
                                    
                                    >{{ tag }}</v-chip>
                                </div>
                                <br>
                                <v-img
                                    :src="projectCards[cardIndex].img"
                                ></v-img> 
                                <br>
                                <p class="text-sm-left"><b>Descrição: </b>{{ projectCards[cardIndex].description }}</p>
                                <div v-if="projectCards[cardIndex].carouselImages.length > 0">
                                    <v-carousel height="200">
                                        <v-carousel-item
                                            v-for="(image,i) in projectCards[cardIndex].carouselImages"
                                            :key="i"
                                            :src="image"
                                            @click="activateLightbox(image)"
                                        ></v-carousel-item>
                                    </v-carousel>
                                    <br>   
                                </div>
                                <div class="text-sm-left">
                                    Minha(s) função(ões): 
                                    <v-chip 
                                        v-for="(tag, index) in projectCards[cardIndex].functions"
                                        :key="index"
                                    
                                    >{{ tag }}</v-chip>
                                </div>                                                                               
                            </v-container> 
                        <v-divider></v-divider> 
                        <v-container align-content-start>
                            <v-btn light class="amber lighten-1"
                                :href="projectCards[cardIndex].link"
                            >
                                Link
                            </v-btn>  
                        </v-container>                    
                    </div>
                </v-card>                
            </v-flex>        
        </v-layout>        
        <v-dialog
            width="830px"
            v-model="dialog"            
        >            
            <v-card>  
                <v-card-text>
                    <img      
                        width="800px"                  
                        :src="lightbox"
                    >
                </v-card-text>

                <v-divider></v-divider>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="amber lighten-1"
                    flat
                    @click="dialog = false"
                >
                    Fechar
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>    
</template>

<script>
export default {
    data(){
        return {
            lightbox: '',
            dialog: false,
            cardIndex: -1,
            projectCards: [
                {   
                    title: 'Planeta RGB', 
                    tags: ['GameMaker','Jogo','Trabalho de Faculdade'],                   
                    description: 'A história se passa em um planeta bicromático, sendo um lado azul e outro vermelho. '
                        + 'Seus habitantes, incapazes de aceitar suas diferenças, vivem em conflito por tanto tempo '
                        + 'que o planeta desaprendeu o significado da palavra “paz”, bem como as vantagens da convivência '
                        + 'com o diferente. Neste cenário, o jogador controla Green. Nosso protagonista é uma divergência '
                        + 'na lógica das cores que forma a identidade visual do planeta RGB (inclusive visualmente), bem como '
                        + 'um pacifista que rejeita o destino de conflito e violência que se apresenta a frente de qualquer um '
                        + 'que ali resida. Sendo um advogado pela resolução pacífica dos conflitos, Green colocará à prova suas '
                        + 'habilidades para sobreviver e transitar em zonas de guerra devastadas pelo conflito, lidando com seus '
                        + '“inimigos” sem recorrer à violência. Esse jogo foi desenvolvido para o trabalho de Projeto '
                        + 'Integrado do Primeiro Semestre do Curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará.',
                    functions: ['Desenvolvedor','Game Designer','Ilustrador'],
                    img: require('@/assets/projects-images/rgb/gamemaker_image.png'),
                    iconsTools: [
                        require('@/assets/interests-icons/gamemaker.png')
                    ],
                    color: 'red lighten-1',
                    carouselImages: [
                        require('@/assets/projects-images/rgb/planetargb_01.png'),
                        require('@/assets/projects-images/rgb/planetargb_02.png'),
                        require('@/assets/projects-images/rgb/planetargb_03.png'),
                        require('@/assets/projects-images/rgb/planetargb_04.png')
                    ],
                    link: 'https://github.com/eduregis/smd-game-planeta-rgb'
                },
                {   
                    title: 'B.E.E.P.',
                    tags: ['Javascript','Jogo','Trabalho de Faculdade'],
                    description: 'Um malware invadiu o computador e descofigurou todos os robozinhos que o fazia funcionar, ' 
                        + 'todos menos um. B.E.E.P. (Bot de Estudo e Esino de Programação) sobreviveu ao ataque e precisa de '
                        + 'ajuda pra fazer o sistema voltar ao normal. Tendo B.E.E.P. como seu mentor, o jogador irá reprogramar '
                        + 'os robozinhos utilizando comandos de "andar", "girar", "atacar", "segurar", "soltar e "apertar". '
                        + 'A proposta do jogo é ensinar conceitos de programação como: Algoritmo, Laços de repetição, condicionais, '
                        + 'funções e recursividade enquanto conta uma história. Conceitos da teoria cognitiva Socio-cultural '
                        + 'foram utilizadas no desenvolvimento do jogo. Esse jogo foi desenvolvido para o trabalho de Projeto '
                        + 'Integrado do Segundo Semestre do Curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará.'
                        ,
                    functions: ['Desenvolvedor'],
                    img: require('@/assets/projects-images/beep/beep_image.png'),
                    iconsTools: [
                        require('@/assets/interests-icons/javascript.png')
                    ],
                    color: 'pink lighten-2',
                    carouselImages: [
                        require('@/assets/projects-images/beep/beep_01.png'),
                        require('@/assets/projects-images/beep/beep_02.png'),
                        require('@/assets/projects-images/beep/beep_03.png'),
                        require('@/assets/projects-images/beep/beep_04.png')
                    ],
                    link: 'https://github.com/eduregis/smd-projeto-integrado-2018.1'
                },
                {   
                    title: 'Sistema Multimeios',
                    tags: ['Angular','Firebase','Sistema','Trabalho de Faculdade'],
                    description: 'Esse sistema gerencia o núcleo Multimeios da EEMTI Telina Barbosa. Este núcleo engloba '
                        + 'a biblioteca, sala de informática e sala de vídeo da escola. Esse sistema foi desenvolvido para o '
                        + 'trabalho final da disciplina de Projeto Integrado I do Curso de Sistemas e Mídias Digitais da '
                        + 'Universidade Federal do Ceará.',
                    functions: ['Desenvolvedor Back-end'],
                    img: require('@/assets/projects-images/multimeios_image.png'),
                    iconsTools: [
                        require('@/assets/interests-icons/angular.png'),
                        require('@/assets/interests-icons/firebase.png')
                    ],
                    color: 'blue lighten-1',
                    carouselImages: [],
                    link: 'https://github.com/eduregis/multimeios'
                }
            ]           
        }
    },
    methods: {
        detailProject(index){
            this.cardIndex = index;
        },
        activateLightbox(image){
            this.lightbox = image;
            this.dialog = true;
        }
    }
}
</script>

<style>
    .second-column{
        margin-top: -8px;
    }
</style>