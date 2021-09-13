<template>
    <div class="app__widget" :style="{ flex: flexPoint }"></div>
</template>
<script>
export default {
    props: ["flexPoint"],
};
</script>
<style scoped>
.app__widget {
    border: 1px solid lightgray;
}
</style>
