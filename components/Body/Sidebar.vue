<template>
    <div class="sidebar">
        <div class="sidebar__top">
            <img
                src="https://images.unsplash.com/photo-1594820169156-f530e8b92c16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
            />
            <v-avatar color="primary" class="sidebar__avatar">
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <h2>Manh Nguyen</h2>
            <h4>manh@gmail.com</h4>
        </div>
        <div class="sidebar__stats">
            <div class="sidebar__stat">
                <p>Who viewed you</p>
                <p class="sidebar__statNumber">2,543</p>
            </div>
            <div class="sidebar__stat">
                <p>Views on post</p>
                <p class="sidebar__statNumber">2,512</p>
            </div>
        </div>
        <div class="sidebar__bottom">
            <p>Recent</p>
            <BodySidebarRecentItem>Vuejs</BodySidebarRecentItem>
            <BodySidebarRecentItem>Programing</BodySidebarRecentItem>
            <BodySidebarRecentItem>softwareengineering</BodySidebarRecentItem>
            <BodySidebarRecentItem>design</BodySidebarRecentItem>
            <BodySidebarRecentItem>developer</BodySidebarRecentItem>
        </div>
    </div>
</template>
<style scoped>
.sidebar {
    top: 80;
    position: sticky;
    flex: 0.2;
    border-radius: 10px;
    text-align: center;
    height: fit-content;
}

.sidebar__avatar {
    margin-bottom: 10px;
}

.sidebar__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
    border-bottom: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: white;
    padding-bottom: 10px;
}

.sidebar__top > img {
    margin-bottom: -20px;
    width: 100%;
    height: 60px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
}

.sidebar__top > h4 {
    color: gray;
    font-size: 12px;
}

.sidebar__top > h2 {
    font-size: 18px;
}

.sidebar__stats {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid lightgray;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.sidebar__stat {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

.sidebar__stat > p {
    color: gray;
    font-size: 13px;
    font-weight: 600;
}

.sidebar__statNumber {
    font-weight: bold;
    color: #0a66c2 !important;
}

.sidebar__bottom {
    text-align: left;
    padding: 10px;
    border: 1px solid lightgray;
    background-color: white;
    border-radius: 10px;
    margin-top: 10px;
}
.sidebar__bottom > p {
    font-size: 13px;
    padding-bottom: 10px;
    margin: 0px;
}
</style>
