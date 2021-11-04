<template>
    <div class="app__create__post">
        <div class="create__post__top">
            <v-avatar color="primary" style="margin-right: 10px">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <v-btn rounded large outlined style="flex: 1" @click="dialog = true">Start A Post</v-btn>
        </div>
        <div class="create__post__bottom">
            <div class="create__post__button">
                <v-btn large text>
                    <v-icon color="primary">mdi-image</v-icon>
                    Photo
                </v-btn>
            </div>
            <div class="create__post__button">
                <v-btn large text>
                    <v-icon color="success">mdi-youtube</v-icon>
                    Video
                </v-btn>
            </div>
            <div class="create__post__button">
                <v-btn large text>
                    <v-icon color="warning">mdi-calendar</v-icon>
                    Event
                </v-btn>
            </div>
            <div class="create__post__button">
                <v-btn large text>
                    <v-icon color="error">mdi-format-float-left</v-icon>
                    Write Article
                </v-btn>
            </div>
        </div>
        <v-dialog v-model="dialog" max-width="600px">
            <v-card>
                <v-card-title>Create a Post</v-card-title>
                <div class="card-body">
                    <v-textarea v-model="message" hide-details outlined label="Write something"></v-textarea>
                </div>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" @click="createPost">Create Post</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            dialog: false,
            message: "",
            description: "this is a Post",
        };
    },
    computed: {
        ...mapGetters({ user: "Auth/user" }),
    },
    methods: {
        async createPost() {
            await this.$store.dispatch("Post/createPost", {
                name: this.user.displayName,
                description: this.description,
                message: this.message,
            });
            this.message = "";
            this.dialog = false;
        },
    },
};
</script>
<style scoped>
.app__create__post {
    border: 1px solid lightgray;
    border-radius: 10px;
    background-color: white;
    padding: 10px 20px;
    margin-bottom: 10px;
}
.create__post__top {
    display: flex;
}

.create__post__bottom {
    display: flex;
}

.create__post__button {
    flex: 0.25;
}

.card-body {
    padding: 20px;
}
</style>
