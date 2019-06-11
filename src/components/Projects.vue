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
                        <h2 v-if="cardIndex == -1">Clique em um projeto para ver os detalhes</h2>
                        <h2 v-else>{{ projectCards[cardIndex].title }}</h2>
                    </v-card-title>
                    <v-card-content v-if="cardIndex != -1">
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
                                        ></v-carousel-item>
                                    </v-carousel>
                                    <br>   
                                </div>
                                <p class="text-sm-left"><b>Minha função: </b>{{ projectCards[cardIndex].function }}</p>                                                                                     
                            </v-container> 
                        <v-divider></v-divider> 
                        <v-container align-content-start>
                            <v-btn light class="amber lighten-1"
                                :href="projectCards[cardIndex].link"
                            >
                                Link
                            </v-btn>  
                        </v-container>                    
                    </v-card-content>
                </v-card>                
            </v-flex>        
        </v-layout>
    </v-container>
    
</template>

<script>
export default {
    data(){
        return {
            cardIndex: -1,
            projectCards: [
                {   
                    title: 'Planeta RGB', 
                    tags: ['jogo','trabalho de faculdade'],                   
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, illum molestiae! Deleniti quaerat nulla numquam iure facilis accusamus accusantium, obcaecati, animi minus velit autem, iste vero molestiae veniam commodi alias.',
                    function: 'Desenvolvedor',
                    img: require('@/assets/projects-images/rgb/gamemaker_image.png'),
                    iconsTools: [
                        require('@/assets/interests-icons/angular.png'),
                        require('@/assets/interests-icons/cpp.png')
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
                    tags: ['jogo','trabalho de faculdade'],
                    description: 'sadasdsaudadguads',
                    function: 'Desenvolvedor',
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
                    tags: ['sistema','trabalho de faculdade'],
                    description: 'sadasdsaudadguads',
                    function: 'Desenvolvedor',
                    img: require('@/assets/projects-images/multimeios_image.png'),
                    iconsTools: [
                        require('@/assets/interests-icons/angular.png')
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
        }
    }
}
</script>

<style>
    .second-column{
        margin-top: -8px;
    }
</style>


