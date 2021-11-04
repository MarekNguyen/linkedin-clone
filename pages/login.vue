<template>
    <div>
        <LoginHeader />
        <LoginBody />
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({ user: "Auth/user" }),
    },
};
</script>
<style></style>
