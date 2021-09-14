<template>
    <div class="suggestion__userinfo">
        <v-avatar color="primary" style="margin-right: 10px">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <div class="userinfo">
            <div class="userinfo__name">Simon Sinek</div>
            <div class="userinfo__title">Optimist and Author at Simon Sinek Inc.</div>
            <v-btn class="userinfo__button" outlined rounded> + Follow</v-btn>
        </div>
    </div>
</template>
<style scoped>
.suggestion__userinfo {
    display: flex;
    margin-bottom: 10px;
    padding: 10px 20px;
}

.userinfo__name {
    font-weight: bolder;
    font-size: 14px;
}

.userinfo__name:hover {
    color: #006097;
    text-decoration: underline;
    cursor: pointer;
}

.userinfo__title {
    font-size: 12px;
    font-weight: 400;
    color: gray;
}

.userinfo__button {
    margin-top: 5px;
}
</style>
