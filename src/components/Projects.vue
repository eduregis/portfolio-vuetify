<template>
    <v-container grid-list-md>
        <br>
            <h1 class="headline text-uppercase " style="color: #fdd855">Projetos</h1>
        <br>
        <v-divider class="amber lighten-1"></v-divider>
        <br>
        <v-layout row wrap>                
            <v-flex 
                v-for="j in 2"
                :key="j"
                text-xs-center 
                wrap 
                xs4
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
                            >
                                <v-card-title                             
                                    class="justify-space-between" 
                                    :class="card.color"
                                >        
                                <h2 class="display-1 black--text font-weight-light">{{ card.title }}</h2>
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
    </v-container>
    
</template>

<script>
export default {
    data(){
        return {
            projectCards: [
                {   
                    title: 'Planeta RGB',                    
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, illum molestiae! Deleniti quaerat nulla numquam iure facilis accusamus accusantium, obcaecati, animi minus velit autem, iste vero molestiae veniam commodi alias.',
                    function: 'Desenvolvedor',
                    img: require('@/assets/projects-images/gamemaker_image.png'),
                    iconsTools: [
                        require('@/assets/interests-icons/angular.png'),
                        require('@/assets/interests-icons/cpp.png')
                    ],
                    color: 'red lighten-1'
                },
                {   
                    title: 'B.E.E.P.',
                    description: 'sadasdsaudadguads',
                    function: 'Desenvolvedor',
                    img: require('@/assets/projects-images/beep_image.png'),
                    iconsTools: [
                        require('@/assets/interests-icons/javascript.png')
                    ],
                    color: 'pink lighten-2'
                },
                {   
                    title: 'Sistema Multimeios',
                    description: 'sadasdsaudadguads',
                    function: 'Desenvolvedor',
                    img: require('@/assets/projects-images/multimeios_image.png'),
                    iconsTools: [
                        require('@/assets/interests-icons/angular.png')
                    ],
                    color: 'blue lighten-1'
                }
            ]           
        }
    } 
}
</script>

<style>
    .second-column{
        margin-top: -8px;
    }
</style>


