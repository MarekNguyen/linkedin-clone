<template>
    <div class="headerOption">
        <v-avatar size="20" height="25px" width="25px" color="primary" v-if="avatar">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <v-icon class="headerOption__icon" v-if="icon">{{ icon }}</v-icon>
        <slot class="headerOption__title"></slot>
    </div>
</template>
<script>
export default {
    props: ["icon", "avatar"],
};
</script>
<style scoped>
.headerOption {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    color: gray;
    cursor: pointer;
}
.headerOption:hover {
    color: black;
}

.headerOption__icon {
    object-fit: contain;
    height: 25px !important;
    width: 25px !important;
}

.headerOption__title {
    font-size: 12px;
    font-weight: 400;
}
</style>
