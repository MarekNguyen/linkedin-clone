<template>
    <div>
        <div class="login__main">
            <v-row>
                <v-col cols="12" md="4" sm="12" class="mx-auto">
                    <v-card class="login__form">
                        <h1>Sign up</h1>
                        <p>Stay updated on your professional world</p>
                        <v-text-field outlined label="Your Fullname" v-model="name"></v-text-field>
                        <v-text-field outlined label="Email" v-model="email"></v-text-field>
                        <v-text-field outlined label="Password" v-model="password" type="password"></v-text-field>
                        <v-text-field outlined label="Confirm password" v-model="confirmPassword" type="password"></v-text-field>
                        <v-btn text rounded small color="primary">Forgot password?</v-btn>
                        <Spacer />
                        <v-btn color="primary" rounded block large @click="signUp"> sign up</v-btn>
                    </v-card>
                    <Spacer />
                    <div class="login__form__footer">
                        <div>New to LinkedIn?</div>
                        <v-btn rounded text color="primary"> Join Now</v-btn>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
    },
    methods: {
        signUp() {
            this.$store.dispatch("Auth/signUp", {
                email: this.email,
                password: this.password,
            });
        },
    },
};
</script>
<style scoped>
.login__main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
}

.login__form {
    padding: 20px 20px;
}

.login__form > p {
    font-size: 14px;
}

.login__form__footer {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
