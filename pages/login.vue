<template>
    <div>
        <LoginHeader />
        <LoginBody />
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    created() {
        if (this.user) this.$router.push("/");
    },
    computed: {
        ...mapGetters({ user: "Auth/user" }),
    },
};
</script>
<style></style>
