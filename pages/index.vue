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
    middleware: "auth",
    computed: {
        ...mapGetters({ user: "Auth/user" }),
    },
};
</script>
