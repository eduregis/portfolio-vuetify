<template>
    <v-container grid-list-md>
        <br>
            <h1 class="headline text-uppercase " style="color: #fdd855">Entre em contato!</h1>
        <br>
        <v-divider class="amber lighten-1"></v-divider>
        <br>
        <template>
            <v-layout justify-center>
                <v-flex xs6>
                    <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                        <v-card style="padding: 10px">
                            <v-text-field
                                v-model="contact.name"
                                :rules="nameRules"
                                label="Nome"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="contact.subject"
                                label="Assunto"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="contact.email"
                                :rules="emailRules"
                                label="E-mail"
                                required
                            ></v-text-field>
                            <v-textarea
                                v-model="contact.message"
                                name="input-7-1"
                                label="Mensagem"
                            ></v-textarea>
                            <v-btn
                                :disabled="!valid"
                                color="success"
                                @click="validate"
                                >
                                Enviar
                            </v-btn>
                            <v-btn
                                color="error"
                                @click="reset"
                                >
                                Limpar Campos
                            </v-btn>  
                        </v-card>              
                    </v-form>
                </v-flex>
            </v-layout>
        </template>
        <v-snackbar
            v-model="snackbar"
            :color="color"            
            :timeout="timeout"
        >
            Mensagem Entregue!!
        <v-btn
            dark
            flat
            @click="snackbar = false"
        >
            Fechar
        </v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            valid: true,
            snackbar: false,
            color: 'green',
            timeout: 3000,
            contact: {
                name: '',
                subject: '',
                email: '',
                message: ''
            },            
            nameRules: [
                v => !!v || 'Ei, me diz teu nome aí!'
            ],            
            emailRules: [
                v => !!v || 'Ei, me diz teu email aí!',
                v => /.+@.+/.test(v) || 'Insira um email válido!'
            ]
        }
    },
    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.$http.post('https://portfolio-contacts-de61a.firebaseio.com/data.json', this.contact)
            .then(() => {                
                this.snackbar = true
            })       
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
    }
}
</script>