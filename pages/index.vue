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
    methods: {
        getData() {
            this.$store.dispatch("Post/getPosts");
        },
    },
    created() {
        this.getData();
    },
    computed: {
        ...mapGetters({ user: "Auth/user" }),
    },
};
</script>
