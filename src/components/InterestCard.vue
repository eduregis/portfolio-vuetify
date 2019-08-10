<template>
    <v-card 
        class="interest-card"
        ripple
        hover
        @click="switchInfo = !switchInfo"
    > 
        <div v-if="switchInfo">
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
        <div v-else>
            <v-card-actions>
                <div class="interest-desc">
                    <p>{{ card.description }}</p>
                </div>
            </v-card-actions>
        </div>                  
    </v-card>
</template>

<script>
export default {
    props: [
        'card'
    ],
    data(){
        return {
            switchInfo: true,
        }
    }
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
    margin: 10px auto 10px auto;
}
</style>

