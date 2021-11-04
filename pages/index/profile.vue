<template>
    <div>
        <v-row>
            <v-col cols="12" md="4" sm="12" class="mx-auto">
                <v-card>
                    <v-card-title>User's Profile</v-card-title>
                    <div class="card-body">
                        <v-text-field outlined label="Email" disabled :value="user.email"></v-text-field>
                        <v-text-field outlined label="Display Name" v-model="user.displayName"></v-text-field>
                        <v-text-field outlined type="number" label="Phone" v-model="user.phoneNumber"></v-text-field>
                        <v-btn color="primary" block @click="updateUserProfile">Update Profile</v-btn>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({ user: "Auth/user" }),
    },
    methods: {
        updateUserProfile() {
            console.log(this.user);
            this.$store.dispatch("Auth/updateUserProfile", this.user);
        },
    },
};
</script>
<style scoped>
.card-body {
    padding: 20px;
}
</style>
