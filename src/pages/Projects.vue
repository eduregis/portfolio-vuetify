<template>
    <v-container grid-list-md>
        <br>
            <h1 class="headline text-uppercase " style="color: #fdd855">Projetos</h1>
        <br>
        <v-divider class="amber lighten-1"></v-divider>
        <br>
        Tags: 
            <v-chip 
                v-for="(tag, index) in tags"
                :key="index"
                :class="{primary: tag == selectedTag}"
                @click="activateTag(tag)"
            >{{ tag }}</v-chip>
        <v-layout row wrap style="margin: 10px">
            <v-flex xs7>
                <div class="project-cards-container">
                    <div
                        v-for="(card, index) in selectedProjects"
                        :key="index"
                        class="project-card"
                    >
                        <v-card                        
                            hover
                            v-ripple
                            @click="detailProject(card)"
                        >                                              
                            <v-img
                                class="project-card-img"
                                :src="card.img"
                            >
                            </v-img> 
                        </v-card>
                    </div> 
                </div>
            </v-flex>             
            <v-flex
                class="card-detail"
                text-xs-center 
                wrap 
                xs4
            >            
                <v-card elevation="24">                    
                    <v-card-title>
                        <v-row v-if="cardIndex == -1">
                            <h2 >Clique em um projeto para ver os detalhes...</h2>
                        </v-row >
                        <v-row v-else>
                            <h2>{{ projectCards[cardIndex].title }}</h2>
                        </v-row>
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
                                            class="carousel-item"
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
                <v-card-text
                    class="lightbox-content"
                >
                    <img      
                        class="lightbox-image"       
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
            cardIndex: 0,
            selectedProjects: [],
            selectedTag: null,
            tags: [
                'Jogo',
                'Sistema',
                'Infográfico',
                'Desenvolvedor',
                'Back-end',
                'Front-end',
                'Ilustrador',
                'Game Designer',
                'Trabalho de Faculdade',
                'Estágio'
            ],
            projectCards: [
                {   
                    title: 'Feminicídio no Nordeste - Infográfico Interativo',
                    shortTitle: 'Feminicídio no Nordeste',
                    tags: ['Sistema','Infográfico','Trabalho de Faculdade'],
                    description: 'Um infográfico interativo que mostra dados sobre o feminicídio na região nordeste no período de  '
                    + '2007 até 2017. A fonte dos dados é o Atlas da Violência 2019. Esse infográfico interativo foi desenvolvido para o trabalho final da '
                    + 'disciplina de Comunicação Visual 2 do Curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará.',
                    functions: ['Desenvolvedor','Front-end'],
                    img: require('@/assets/projects-images/info-feminicidio/info_feminicidio_image.png'),
                    iconsTools: [
                        require('@/assets/interests-icons/vue.png')
                    ],
                    carouselImages: [
                        require('@/assets/projects-images/info-feminicidio/info_feminicidio_01.png'),
                        require('@/assets/projects-images/info-feminicidio/info_feminicidio_02.png'),
                        require('@/assets/projects-images/info-feminicidio/info_feminicidio_03.png'),
                        require('@/assets/projects-images/info-feminicidio/info_feminicidio_04.png'),
                        require('@/assets/projects-images/info-feminicidio/info_feminicidio_05.png'),
                        require('@/assets/projects-images/info-feminicidio/info_feminicidio_06.png'),
                        require('@/assets/projects-images/info-feminicidio/info_feminicidio_07.png'),
                        require('@/assets/projects-images/info-feminicidio/info_feminicidio_08.png'),
                        require('@/assets/projects-images/info-feminicidio/info_feminicidio_09.png'),
                    ],
                    link: 'https://infografico-cv2-406783.netlify.com/'
                }, 
                {   
                    title: 'MIDE - Enigma dos Bilhetes',
                    shortTitle: 'Enigma dos Bilhetes',
                    tags: ['Sistema','Jogo','Estágio'],
                    description: 'O Enigma dos Bilhetes é um recurso digital desenvolvido para o projeto de '
                    + 'Pesquisa e Desenvolvimento de Recursos Educacionais Digitais (RED) para conteúdos de '
                    + 'Língua Portuguesa e Matemática nos anos iniciais do ensino fundamental (Projeto MIDE). ',
                    functions: ['Desenvolvedor','Front-end'],
                    img: require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_image.png'),
                    iconsTools: [
                        require('@/assets/interests-icons/vue.png')
                    ],
                    carouselImages: [
                        require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_01.png'),
                        require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_02.png'),
                        require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_03.png'),
                        require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_04.png'),
                        require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_05.png'),
                        require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_06.png'),
                        require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_07.png'),
                        require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_08.png'),
                        require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_09.png'),
                        require('@/assets/projects-images/enigma-dos-bilhetes/enigma_dos_bilhetes_10.png')
                    ],
                    link: 'https://mide-enigma-dos-bilhetes.netlify.com/#/'
                },
                {   
                    title: 'Luz do Saber - Fundamental',
                    shortTitle: 'Luz do Saber',
                    tags: ['Sistema','Jogo','Estágio'],
                    description: 'Software para alfabetização de crianças. Atividades digitais que contribuem para alfabetização infantil. '
                    + 'O projeto trata-se de uma nova versão do antigo software Luz do Saber, feito em Flash. Agora criado no framework Vue.',
                    functions: ['Desenvolvedor','Front-end'],
                    img: require('@/assets/projects-images/luz-do-saber/luz_do_saber_image.png'),
                    iconsTools: [
                        require('@/assets/interests-icons/vue.png')
                    ],
                    carouselImages: [
                        require('@/assets/projects-images/luz-do-saber/luz_do_saber_01.png'),
                        require('@/assets/projects-images/luz-do-saber/luz_do_saber_02.png'),
                        require('@/assets/projects-images/luz-do-saber/luz_do_saber_03.png'),
                        require('@/assets/projects-images/luz-do-saber/luz_do_saber_04.png'),
                        require('@/assets/projects-images/luz-do-saber/luz_do_saber_05.png'),
                        require('@/assets/projects-images/luz-do-saber/luz_do_saber_06.png'),
                        require('@/assets/projects-images/luz-do-saber/luz_do_saber_07.png'),
                        require('@/assets/projects-images/luz-do-saber/luz_do_saber_08.png'),
                        require('@/assets/projects-images/luz-do-saber/luz_do_saber_09.png'),
                        require('@/assets/projects-images/luz-do-saber/luz_do_saber_10.png')
                    ],
                    link: 'http://luz-do-saber-staging.herokuapp.com/'
                },
                {   
                    title: 'Egipcia Ecommerce',
                    shortTitle: 'Egipcia',
                    tags: ['Sistema','Trabalho de Faculdade'],
                    description: 'Esse sistema gerencia o comércio digital fictício Egipcia. Com o uso de JSPs e Servlets, '
                        + 'o Ecommerce Egipcia realiza operações de cadastro, listagem, filtragem, alteração e exclusão de '
                        + 'produtos, categorias, compras e clientes para o administrador, e a realização de compras para '
                        + 'o cliente. Utiliza cookies para realizar a função do carrinho de compras, podendo ser usado '
                        + 'mesmo sem estar com uma sessão de usuário. Esse sistema foi desenvolvido para o trabalho final da '
                        + 'disciplina de Programação Web I do Curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará.',
                    functions: ['Desenvolvedor','Front-end','Back-end'],
                    img: require('@/assets/projects-images/egipcia/egipcia_image.png'),
                    iconsTools: [
                        require('@/assets/interests-icons/java.png')
                    ],
                    carouselImages: [
                        require('@/assets/projects-images/egipcia/egipcia_01.png'),
                        require('@/assets/projects-images/egipcia/egipcia_02.png'),
                        require('@/assets/projects-images/egipcia/egipcia_03.png'),
                        require('@/assets/projects-images/egipcia/egipcia_04.png'),
                        require('@/assets/projects-images/egipcia/egipcia_05.png'),
                        require('@/assets/projects-images/egipcia/egipcia_06.png'),
                    ],
                    link: 'https://github.com/eduregis/egipcia'
                },
                {   
                    title: 'Sistema Multimeios',
                    shortTitle: 'Sis. Multimeios',
                    tags: ['Sistema','Trabalho de Faculdade'],
                    description: 'Esse sistema gerencia o núcleo Multimeios da EEMTI Telina Barbosa. Este núcleo engloba '
                        + 'a biblioteca, sala de informática e sala de vídeo da escola. Esse sistema foi desenvolvido para o '
                        + 'trabalho final da disciplina de Projeto Integrado I do Curso de Sistemas e Mídias Digitais da '
                        + 'Universidade Federal do Ceará.',
                    functions: ['Desenvolvedor','Back-end'],
                    img: require('@/assets/projects-images/multimeios_image.png'),
                    iconsTools: [
                        require('@/assets/interests-icons/angular.png'),
                        require('@/assets/interests-icons/firebase.png')
                    ],
                    carouselImages: [],
                    link: 'https://github.com/eduregis/multimeios'
                },
                {   
                    title: 'B.E.E.P.',
                    shortTitle: 'B.E.E.P.',
                    tags: ['Jogo','Trabalho de Faculdade'],
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
                    carouselImages: [
                        require('@/assets/projects-images/beep/beep_01.png'),
                        require('@/assets/projects-images/beep/beep_02.png'),
                        require('@/assets/projects-images/beep/beep_03.png'),
                        require('@/assets/projects-images/beep/beep_04.png')
                    ],
                    link: 'https://github.com/eduregis/smd-projeto-integrado-2018.1'
                },
                 {   
                    title: 'Breakout Remake',
                    shortTitle: 'Breakout Remake',
                    tags: ['Jogo','Trabalho de Faculdade'],
                    description: 'Um remake do clássico jogo de atari Breakout. Feito com o framework Processing '
                        + 'Esse jogo foi desenvolvido para o trabalho final da disciplina de Matemática aplicada à Multimídia I'
                        + ' do Curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará.'
                        ,
                    functions: ['Desenvolvedor','Ilustrador'],
                    img: require('@/assets/projects-images/breakout_remake/breakout_remake_image.png'),
                    iconsTools: [
                        require('@/assets/interests-icons/java.png')
                    ],
                    carouselImages: [
                        require('@/assets/projects-images/breakout_remake/breakout_remake_01.png'),
                        require('@/assets/projects-images/breakout_remake/breakout_remake_02.png'),
                        require('@/assets/projects-images/breakout_remake/breakout_remake_03.png'),
                        require('@/assets/projects-images/breakout_remake/breakout_remake_04.png')
                    ],
                    link: 'https://drive.google.com/file/d/1pgn1oRAIitkk32xheU2G57y_E9rOHMop/view'
                },    
                {   
                    title: 'Planeta RGB',
                    shortTitle: 'Planeta RGB', 
                    tags: ['Jogo','Trabalho de Faculdade'],                   
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
                    carouselImages: [
                        require('@/assets/projects-images/rgb/planetargb_01.png'),
                        require('@/assets/projects-images/rgb/planetargb_02.png'),
                        require('@/assets/projects-images/rgb/planetargb_03.png'),
                        require('@/assets/projects-images/rgb/planetargb_04.png')
                    ],
                    link: 'https://github.com/eduregis/smd-game-planeta-rgb'
                },  
            ]           
        }
    },
    created () {
        this.projectCards.forEach(project => {
            this.selectedProjects.push(project)
        });
    },    
    methods: {
        detailProject(card){
            this.cardIndex = this.projectCards.indexOf(card);
        },
        activateLightbox(image){
            this.lightbox = image;
            this.dialog = true;
        },
        activateTag(tag){
            if(this.selectedTag == tag){
                this.selectedTag = null;
                this.selectedProjects = this.projectCards;
            }else {
                this.selectedTag = tag;
                this.selectedProjects = this.projectCards.filter((project) => this.checkTag(this.selectedTag, project)); 
            }
        },
        checkTag(tag, project){
            if((project.tags.indexOf(tag) === -1) && (project.functions.indexOf(tag) === -1)){                
                return false;
            }
            return true;
        }
    }
}
</script>

<style>
    .project-cards-container {
        display: grid;
        grid-template-columns: auto auto;
        position: relative;
    }
    .project-card {
        position: relative;
        margin: 10px;
    }
    .project-card-title{
        width: 100%;
        height: 100%;
        z-index: 2;
        opacity: 0;
        display: flex;
        padding: 10px;
        transition: opacity .5s ease-out;
        background-color: rgba(0,0,0,0.5);
    }
    .project-card-title:hover{
        opacity: 1;
    }
    .project-card-img{
        width: 100%;
        z-index: 1;
    }    
    .second-column{
        margin-top: -8px;
    }
    .card-detail{
        margin: 0 auto 0 auto;
    }
    .carousel-item{
        cursor: pointer;
    }
    .lightbox-content{
        display: flex;
        justify-content: center;
    }
    .lightbox-image{
        max-width: 800px;
        max-height: 700px;
    }
</style>