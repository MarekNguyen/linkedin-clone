<template>
    <div>
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
                <NuxtLink to="/login">Home page</NuxtLink>
            </div>
            <BodyWidget :flexPoint="'0.3'" />
        </div>
    </div>
</template>
<script>
export default {};
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
