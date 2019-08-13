<template>
    <v-tooltip bottom>
        <template v-slot:activator="{ on }">
            <v-card 
                class="interest-card"
                ripple
                hover
                v-on="on"
            > 
                <div>
                    <v-card-actions class="justify-center">            
                        <div class="interest-circle" :class="card.color">
                            <img
                                :src="card.img"
                                height="32"
                                width="32"
                                :alt="card.title"
                            />
                        </div>                       
                    </v-card-actions>  
                    <v-divider></v-divider>
                    <v-card-actions class="justify-center">
                        <div class="interest-title">
                            <h2 class="display-1 light--text font-weight-light">{{ card.title }}</h2>  
                        </div> 
                    </v-card-actions>
                </div>         
            </v-card>
        </template>
        <div class="interest-desc">
            <span>{{ card.description }}</span>
        </div>        
    </v-tooltip>
    
</template>

<script>
export default {
    props: [
        'card'
    ],
}
</script>

<style lang="scss">
.interest-card {
    height: 170px;
    width: 300px;
    margin: 15px;
}
.interest-circle {
    margin: 10px;
    padding: 20px 20px 15px 20px;
    border-radius: 50%;  
}
.interest-desc {
    width: 300px;
}
</style>

