<template>
    <div>
        <div class="sidebar__recentItem">
            <span class="sidebar__hash">#</span>
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.sidebar__recentItem {
    display: flex;
    font-size: 13px;
    color: gray;
    font-weight: bolder;
    cursor: pointer;
    padding: 5px;
    margin-bottom: 5px;
}

.sidebar__recentItem:hover {
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    color: black;
}

.sidebar__hash {
    margin-right: 10px;
    margin-left: 5px;
}
</style>
