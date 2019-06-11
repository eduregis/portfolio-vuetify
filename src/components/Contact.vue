<template>
    <v-container grid-list-md>
        <br>
            <h1 class="headline text-uppercase " style="color: #fdd855">Entre em contato!</h1>
        <br>
        <v-divider class="amber lighten-1"></v-divider>
        <br>
        <template>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="assunto"
                    :rules="nameRules"
                    label="Name"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>
                <v-textarea
                    name="input-7-1"
                    label="Mensagem"
                ></v-textarea>
                <v-btn
                    :disabled="!valid"
                    color="success"
                    @click="validate"
                    >
                    Validate
                </v-btn>
                <v-btn
                    color="error"
                    @click="reset"
                    >
                    Reset Form
                </v-btn>
                <v-btn
                    color="warning"
                    @click="resetValidation"
                    >
                    Reset Validation
                </v-btn>
            </v-form>
        </template>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Ei, me diz teu nome aí!'
            ],
            email: '',
            emailRules: [
                v => !!v || 'Ei, me diz teu email aí!',
                v => /.+@.+/.test(v) || 'Insira um email válido!'
            ],
        }
    },
    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
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