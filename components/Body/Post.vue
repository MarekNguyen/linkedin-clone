<template>
    <div class="app__post">
        <div class="post__header">
            <p>Jobs recommended for you</p>
            <v-btn rounded text x-small>
                <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
        </div>
        <div class="post__body">
            <div class="post__author">
                <v-avatar color="primary" style="margin-right: 10px">
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                </v-avatar>
                <div>
                    <div class="post__author__name">{{ post.data.name }}</div>
                    <div class="post__author__title">Founder at Ohmytech.pl</div>
                    <div class="post__description">
                        <div class="post__time">10h</div>
                        <div>&#183;</div>
                        <div class="post_status">Edited</div>
                        <div>&#183;</div>
                        <div>
                            <v-icon small>mdi-earth</v-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="post__content">
                <div class="content">{{ post.data.message }}</div>
            </div>
            <div class="post__summary">
                <div class="post__likes">
                    <v-avatar color="primary" size="18">
                        <v-icon x-small dark>mdi-thumb-up</v-icon>
                    </v-avatar>
                    <v-avatar color="error" size="18">
                        <v-icon x-small dark>mdi-heart</v-icon>
                    </v-avatar>
                    <v-avatar color="success" size="18">
                        <v-icon x-small dark>mdi-hand-heart</v-icon>
                    </v-avatar>
                    <div>2,095</div>
                </div>
                <div>&#183;</div>
                <div class="post__comments">139 comments</div>
            </div>
        </div>
        <div class="post__footer">
            <v-btn class="post__footer__button" text>
                <v-icon>mdi-thumb-up-outline</v-icon>
                Like
            </v-btn>
            <v-btn class="post__footer__button" text>
                <v-icon>mdi-message-text</v-icon>
                Comment
            </v-btn>
            <v-btn class="post__footer__button" text>
                <v-icon>mdi-share</v-icon>
                Share
            </v-btn>
            <v-btn class="post__footer__button" text>
                <v-icon>mdi-send</v-icon>
                Send
            </v-btn>
        </div>
    </div>
</template>
<script>
export default {
    props: ["post"],
};
</script>
<style scoped>
.app__post {
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 10px;
    margin-bottom: 10px;
}
.post__header {
    border-bottom: 0.1px solid lightgray;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.post__header > p {
    margin: 0;
    font-size: 13px;
    color: gray;
}

.post__body {
    padding: 10px 20px;
    border-bottom: 0.1px solid lightgray;
}

.post__author {
    display: flex;
}

.post__author__name {
    font-weight: bolder;
    font-size: 14px;
}

.post__author__name:hover {
    color: #006097;
    text-decoration: underline;
    cursor: pointer;
}

.post__author__title {
    font-size: 12px;
    font-weight: 400;
    color: gray;
}

.post__likes {
    display: flex;
    align-items: center;
}

.post__likes:hover {
    cursor: pointer;
}

.post__likes > div {
    margin-left: 5px;
    font-size: 14px;
    font-weight: 400;
    color: gray;
}

.post__description {
    display: flex;
    font-size: 12px;
    font-weight: 400;
    color: gray;
}

.post__description > div {
    margin-right: 5px;
}

.post__summary {
    display: flex;
    font-size: 14px;
    font-weight: 400;
    color: gray;
    align-items: center;
}

.post__summary > div {
    margin-right: 10px;
}

.post__footer {
    display: flex;
    padding: 10px 20px;
}

.post__footer__button {
    display: flex;
    padding: 0 10px;
}

.content {
    white-space: pre;
}
</style>
