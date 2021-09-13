<template>
    <v-app class="app">
        <Header />
        <v-container>
            <Nuxt class="app__body" />
        </v-container>
    </v-app>
</template>
<style scoped>
.app__body {
    display: flex;
}
.app {
    background-color: #f3f2ef;
}
</style>
