<template>
    <div class="header">
        <div class="header__left">
            <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
            <div class="header__search">
                <v-icon>mdi-magnify</v-icon>
                <input type="text" placeholder="Search" />
            </div>
        </div>
        <div class="header__right">
            <HeaderOption :icon="'mdi-home'"> Home </HeaderOption>
            <HeaderOption :icon="'mdi-account-supervisor'"> My NetWork </HeaderOption>
            <HeaderOption :icon="'mdi-briefcase-variant'"> Job </HeaderOption>
            <HeaderOption :icon="'mdi-bell'"> Notifications </HeaderOption>
            <HeaderOption :avatar="true"> Me </HeaderOption>
            <HeaderOption :icon="'mdi-apps'"> Work </HeaderOption>
        </div>
    </div>
</template>
<style scoped>
.header {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-evenly;
    border-bottom: 0.1px solid lightgray;
    padding-top: 10px;
    padding-bottom: 10px;
    z-index: 999;
    background-color: white;
}
.header__left {
    display: flex;
    align-items: center;
}
.header__left > img {
    object-fit: contain;
    height: 40px;
    margin-right: 10px;
}
.header__search {
    padding: 20px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    height: 22px;
    color: gray;
    background-color: #eef3f8;
}
.header__search > input {
    outline: none;
    border: none;
    background: none;
}
.header__right {
    display: flex;
}
</style>
