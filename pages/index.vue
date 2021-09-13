<template>
    <div class="app__body">
        <BodySidebar :flexPoint="'0.2'" />
        <div class="app__content">
            <BodyCreatePost />
            <BodyPost />
            <BodyPost />
            <BodyPost />
            <BodyPost />
            <BodyPost />
            <BodyPost />
            <BodyPost />
        </div>
        <BodyWidget :flexPoint="'0.3'" />
    </div>
</template>
<style scoped>
.app__body {
    display: flex;
}
.app__content {
    flex: 0.5;
    margin: 0px 20px;
}
</style>
