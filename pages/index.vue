<template>
    <div>
        <Header />
        <v-container>
            <Nuxt />
        </v-container>
    </div>
</template>
<style scoped></style>
<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({ user: "Auth/user" }),
    },
    created() {
        // if (!this.user) this.$router.push("/login");
    },
};
</script>
