<template>
    <div class="app__post">
        <div class="post__header">
            <p>Jobs recommended for you</p>
            <v-icon>mdi-dots-horizontal</v-icon>
        </div>
        <div class="post__body">testesestes</div>
    </div>
</template>
<style scoped>
.app__post {
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 10px;
}
.post__header {
    border-bottom: 0.1px solid lightgray;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
}
.post__header > p {
    margin: 0;
    font-size: 13px;
    color: gray;
}
.post__body {
    padding: 10px 20px;
}
</style>
