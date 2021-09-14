<template>
    <div class="app__widget__suggestion">
        <div class="suggestion__header">
            <div>
                <slot name="header"> </slot>
            </div>
            <v-btn text rounded>
                <v-icon>mdi-information</v-icon>
            </v-btn>
        </div>
        <div class="suggestion__body">
            <slot name="body"> </slot>
        </div>
        <div class="suggesstion__footer">
            <slot name="footer"> </slot>
            <v-icon>mdi-arrow-right</v-icon>
        </div>
    </div>
</template>
<style scoped>
.app__widget__suggestion {
    background-color: white;
    border-radius: 10px;
    border: 1px solid lightgray;
    margin-bottom: 10px;
}

.suggestion__header {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
}

.suggesstion__footer {
    border-radius: 5px;
    margin: 5px 20px;
}

.suggesstion__footer:hover {
    background-color: whitesmoke;
    cursor: pointer;
}
</style>
