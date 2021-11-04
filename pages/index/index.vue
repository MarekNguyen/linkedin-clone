<template>
    <div>
        <div class="app__body">
            <BodySidebar :flexPoint="'0.2'" />
            <div class="app__content">
                <BodyCreatePost />
                <BodyPost v-for="post in posts" :key="post.id" :post="post" />
                <NuxtLink to="/login">Home page</NuxtLink>
            </div>
            <BodyWidget :flexPoint="'0.3'" />
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({ posts: "Post/posts" }),
    },
};
</script>
<style scoped>
.app__body {
    display: flex;
}
.app__content {
    flex: 0.5;
    margin: 0px 20px;
}
</style>
